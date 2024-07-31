const axios = require('axios');

// Function to make GET requests
const getRequest = async (url, headers = {}) => {
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Function to make POST requests
const postRequest = async (url, data, headers = {}) => {
    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Function to handle API errors
const handleApiError = (error) => {
    // Log the error for debugging purposes
    console.error('API call failed:', error);
    // Check for different types of errors and throw them accordingly
    if (error.response) {
        // The request was made and the server responded with a status code
        // that is not within the range of 2xx
        throw new Error(`API Error: ${error.response.status} ${error.response.statusText}`);
    } else if (error.request) {
        // The request was made but no response was received
        throw new Error('API Error: No response from server');
    } else {
        // Something happened in setting up the request that triggered an Error
        throw new Error('API Error: Request setup failed');
    }
};

module.exports = {
    getRequest,
    postRequest
};
