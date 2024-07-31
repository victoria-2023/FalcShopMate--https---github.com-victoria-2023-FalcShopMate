const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommendationController');
const { catchAsyncErrors } = require('../middleware/errorHandlers');

// Route to handle GET requests for personalized product recommendations
router.get('/recommendations/:userId', catchAsyncErrors(getRecommendations));

module.exports = router;
