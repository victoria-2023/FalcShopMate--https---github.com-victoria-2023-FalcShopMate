const axios = require('axios');

// Mock function to simulate fetching recommendations from an external API
const fetchRecommendationsFromAPI = async (userId) => {
    try {
        const response = await axios.post(`${process.env.BASE_URL}/recommendations`, { userId });
        return response.data;  // Assuming the API returns data directly
    } catch (error) {
        console.error("Failed to fetch recommendations:", error);
        throw error;  // Re-throw the error for handling at a higher level
    }
};

// Controller function to handle the GET request for recommendations
const getRecommendations = async (req, res) => {
    const { userId } = req.params;  // Assuming the user ID is passed as a URL parameter

    try {
        const recommendations = await fetchRecommendationsFromAPI(userId);
        res.status(200).json({
            success: true,
            data: recommendations,
            message: "Recommendations fetched successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch recommendations due to an internal error."
        });
    }
};

module.exports = {
    getRecommendations
};
