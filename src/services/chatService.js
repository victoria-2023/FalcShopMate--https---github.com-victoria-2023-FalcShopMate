const axios = require('axios');

const chatWithBot = async (message) => {
    try {
        const response = await axios.post(`${process.env.CHATBOT_URL}`, { message });
        return response.data;
    } catch (error) {
        console.error('Error communicating with chatbot:', error);
        throw new Error('Chatbot service is currently unavailable.');
    }
};

module.exports = { chatWithBot };
