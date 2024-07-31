const axios = require('axios');

const fetchRecommendations = async (userId) => {
    try {
        const response = await axios.get(`${process.env.RECOMMENDATION_URL}/users/${userId}/recommendations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        throw new Error('Recommendation service is currently unavailable.');
    }
};

module.exports = { fetchRecommendations };
