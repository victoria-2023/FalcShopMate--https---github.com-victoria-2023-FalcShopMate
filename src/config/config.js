require('dotenv').config(); // This loads environment variables from a .env file into process.env

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URI,
    apiKey: process.env.API_KEY,
    chatbotUrl: process.env.CHATBOT_URL,
    baseUrl: process.env.BASE_URL
};

module.exports = config;
