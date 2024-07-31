const express = require('express');
const router = express.Router();
const { chatWithBot } = require('../controllers/chatController');
const { catchAsyncErrors } = require('../middleware/errorHandlers');

// Route to handle POST requests for chatting with the bot
router.post('/chat', catchAsyncErrors(chatWithBot));

module.exports = router;
