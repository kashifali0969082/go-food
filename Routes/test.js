const express = require('express');
const router = express.Router();
const Order = require('../models/Orders'); // Mongoose model

// GET /api/orders
router.get('/test', async (req, res) => {
  try {
    const orders = await Order.find(); // Use Mongoose to fetch all orders
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
