const axios = require('axios');

const checkInventory = async (productId) => {
    try {
        const response = await axios.get(`${process.env.INVENTORY_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw new Error('Inventory service is currently unavailable.');
    }
};

module.exports = { checkInventory };
