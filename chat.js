import config from './config.js';

// Store chat state in localStorage
const chatState = {
    isOpen: false,
    messages: []
};

// Initialize chat state from localStorage
function initializeChatState() {
    const savedState = localStorage.getItem('chatState');
    if (savedState) {
        Object.assign(chatState, JSON.parse(savedState));
    }
}

// Save chat state to localStorage
function saveChatState() {
    localStorage.setItem('chatState', JSON.stringify(chatState));
}

document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const closeChat = document.querySelector('.close-chat');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // Initialize chat state
    initializeChatState();
    
    // Restore chat state
    if (chatState.isOpen) {
        chatModal.style.display = 'block';
    }
    
    // Restore messages
    chatState.messages.forEach(msg => {
        addMessage(msg.text, msg.sender);
    });

    // Open chat modal
    chatButton.addEventListener('click', () => {
        chatModal.style.display = 'block';
        chatState.isOpen = true;
        saveChatState();
    });

    // Close chat modal
    closeChat.addEventListener('click', () => {
        chatModal.style.display = 'none';
        chatState.isOpen = false;
        saveChatState();
    });

    // Close chat when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === chatModal) {
            chatModal.style.display = 'none';
            chatState.isOpen = false;
            saveChatState();
        }
    });

    // Send message function
    async function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';

            try {
                // Show typing indicator
                const typingDiv = document.createElement('div');
                typingDiv.className = 'message bot typing';
                typingDiv.textContent = '...';
                chatMessages.appendChild(typingDiv);

                // Get AI response
                const response = await getAIResponse(message);
                
                // Remove typing indicator
                chatMessages.removeChild(typingDiv);
                
                // Add AI response
                addMessage(response, 'bot');
            } catch (error) {
                console.error('Error getting AI response:', error);
                addMessage('Sorry, I encountered an error. Please try again.', 'bot');
            }
        }
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Save message to state
        chatState.messages.push({ text, sender });
        saveChatState();
    }

    // Handle send button click
    sendButton.addEventListener('click', sendMessage);

    // Handle enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // OpenAI API integration
    async function getAIResponse(message) {
        const systemPrompt = `You are an AI assistant for Sarthak Sethi. You should ONLY answer questions about Sarthak's:

        1. Education: 
        Year in School: 3rd year
        Major: Computer Science and Applied Math student at San Jose State University
        
        Classes Taken: CS46a - Introduction to Programming, CS46b - Introduction to Data Structures, CS146 - Data Structures and Algorithms, CS151 - Object Oriented Programming, CS171 - Machine Learning, Math30 - Calculus 1, Math42 - Discrete Math, Math31 - Calculus 2, Math39 - Linear Algebra, Math32 - Calculus 3, Math161a - Statistics and Probability, Math177 -  Linear and Non-Linear Optimization, CS157a - Introduction to Database Management Systems, CS122 - Advanced Programming with Python

        2. Skills: 
        
        Technical Skills: Python, Java, SQL, HTML5, CSS, JavaScript, SciPy, NumPy, Pandas, Scikit-learn, Flask, ReactJS, Jira, Git, Docker, AWS, Linux, Excel, TensorFlow, PyTorch, Keras
        
        Soft Skills: 

        3. Projects: SJFit, Harmony Health, Mass Shooting Predictor, Study Group, Eventify, Uzz-ify, Amulanssi, Slue

        4. Contact: Email (sarthakluv@gmail.com),  LinkedIn: Linkedin.com/in/sarsethi, GitHub :github.com/1300sarthak, DevPost, Medium

        5. Resume: 
        
        Experience:
        

        6. Research:
        
        Sarthak is working under Dr.Sengupta at the San Jose State Univseirty 
        
        
        
        7. Hackathons: Sarthak has attended multiple hackathons during his time in University and High School, and he has also won many of these hackathons, 
        
        Hackathons Won:
        Silicon Hacks (in 2024, in San Jose,CA) - SJFit 
        SJHacks

        

        IMPORTANT RULES:

        - If asked about anything not related to Sarthak, respond with: "I can only answer questions about Sarthak Sethi, his skills, projects, and experience. Please ask me something specific about him."

        - Keep responses concise and professional

        - If you don't know something specific about Sarthak, say so

        - Do not make up any information

        - Do not answer general questions or provide advice

        - Do not engage in casual conversation`;

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: message }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                })
            });

            const data = await response.json();
            return data.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            throw error;
        }
    }
}); 