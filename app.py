from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
import os
from openai import OpenAI

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Enable CORS for all routes

# Configure OpenAI
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))


@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        message = data.get('message')

        if not message:
            return jsonify({'error': 'No message provided'}), 400

        # System prompt with information about Sarthak
        system_prompt = """You are an AI assistant for Sarthak Sethi. You should ONLY answer questions about Sarthak's:
        (rest of your system prompt here...)
        """

        # Make API call to OpenAI
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": message}
            ],
            max_tokens=150,
            temperature=0.7
        )

        # Extract the response text
        ai_response = response.choices[0].message.content.strip()

        return jsonify({'response': ai_response})

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'An error occurred while processing your request'}), 500


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if path.startswith('api/'):
        return jsonify({'error': 'API endpoint not found'}), 404
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5002))
    app.run(host='0.0.0.0', port=port, debug=False)
