function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.classList.toggle('open');
}

function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const messagesContainer = document.getElementById('chatbotMessages');
    
    if (input.value.trim() === '') return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = input.value;
    messagesContainer.appendChild(userMessage);
    
    // Clear input
    const userInput = input.value;
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = getBotResponse(userInput);
        messagesContainer.appendChild(botMessage);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function getBotResponse(userInput) {
    const responses = [
        "I'd be happy to help you with that! Let me connect you with more information about our labs.",
        "That's a great question! ParkarLabs offers comprehensive virtual environments for hands-on learning.",
        "I can help you get started with our platform. Would you like to know more about our features?",
        "Thanks for reaching out! Our team can provide more detailed assistance with your specific needs.",
        "I'm here to help! Feel free to ask me anything about ParkarLabs and our services."
    ];
    
    if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
        return "Hello! Welcome to ParkarLabs. How can I assist you today?";
    } else if (userInput.toLowerCase().includes('lab') || userInput.toLowerCase().includes('environment')) {
        return "Our lab environments are cloud-based and ready to use! You can create virtual machines, access pre-configured setups, and work on real-world scenarios.";
    } else if (userInput.toLowerCase().includes('help') || userInput.toLowerCase().includes('support')) {
        return "I'm here to help! You can ask me about our lab features, getting started, or any questions about ParkarLabs.";
    }
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Close chatbot when clicking outside
document.addEventListener('click', function(event) {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotWindow = document.getElementById('chatbotWindow');
    
    if (!chatbotContainer.contains(event.target) && chatbotWindow.classList.contains('open')) {
        chatbotWindow.classList.remove('open');
    }
});
