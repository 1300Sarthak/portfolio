// Remove config import since we're not using it anymore
// import config from './config.js';

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

    // Ensure modal is hidden by default
    chatModal.style.display = 'none';

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

                console.log('Sending message to backend:', message);

                // Get AI response from Flask backend
                const response = await fetch('http://localhost:5002/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message })
                });

                console.log('Response status:', response.status);

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error response:', errorData);
                    throw new Error(`Network response was not ok: ${response.status} ${errorData.error || ''}`);
                }

                const data = await response.json();
                console.log('Response data:', data);
                
                // Remove typing indicator
                chatMessages.removeChild(typingDiv);
                
                // Add AI response
                addMessage(data.response, 'bot');
            } catch (error) {
                console.error('Error getting AI response:', error);
                // Remove typing indicator if it exists
                const typingDiv = document.querySelector('.message.typing');
                if (typingDiv) {
                    chatMessages.removeChild(typingDiv);
                }
                addMessage(`Error: ${error.message}. Please make sure the backend server is running.`, 'bot');
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
}); 