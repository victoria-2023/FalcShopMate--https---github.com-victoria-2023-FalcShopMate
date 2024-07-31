const axios = require('axios');

// Function to simulate fetching inventory data from an external API
const fetchInventoryFromAPI = async (productId) => {
    try {
        const response = await axios.get(`${process.env.BASE_URL}/inventory/${productId}`);
        return response.data;  // Assuming the API returns data directly
    } catch (error) {
        console.error("Failed to fetch inventory:", error);
        throw error;  // Re-throw the error for handling at a higher level
    }
};

// Controller function to handle the GET request for inventory checks
const getInventoryStatus = async (req, res) => {
    const { productId } = req.params;  // Assuming the product ID is passed as a URL parameter

    try {
        const inventoryData = await fetchInventoryFromAPI(productId);
        res.status(200).json({
            success: true,
            data: inventoryData,
            message: "Inventory status fetched successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch inventory due to an internal error."
        });
    }
};

module.exports = {
    getInventoryStatus
};
