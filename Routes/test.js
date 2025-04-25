const Order = require('../models/Orders');

router.get('/test', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM orders');
      res.status(200).json({ success: true, data: rows });
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  module.exports = router;  