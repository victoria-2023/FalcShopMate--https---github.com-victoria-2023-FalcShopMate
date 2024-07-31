const axios = require('axios');

// Function to simulate sending a message to a chatbot service and receiving a response
const sendMessageToChatbot = async (message) => {
    try {
        const response = await axios.post(`${process.env.CHATBOT_URL}`, { message });
        return response.data;  // Assuming the API returns the chatbot's response directly
    } catch (error) {
        console.error("Failed to send message to chatbot:", error);
        throw error;  // Re-throw the error for handling at a higher level
    }
};

// Controller function to handle POST requests for chat interactions
const chatWithBot = async (req, res) => {
    const { message } = req.body;  // Assuming the message to the bot is sent in the request body

    if (!message) {
        return res.status(400).json({
            success: false,
            message: "No message provided."
        });
    }

    try {
        const chatResponse = await sendMessageToChatbot(message);
        res.status(200).json({
            success: true,
            response: chatResponse,
            message: "Message processed successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to process message due to an internal error."
        });
    }
};

module.exports = {
    chatWithBot
};
