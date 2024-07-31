const express = require('express');
const router = express.Router();
const { getInventoryStatus } = require('../controllers/inventoryController');
const { catchAsyncErrors } = require('../middleware/errorHandlers');

// Route to handle GET requests for inventory checks
router.get('/inventory/:productId', catchAsyncErrors(getInventoryStatus));

module.exports = router;
