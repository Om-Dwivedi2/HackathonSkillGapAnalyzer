const express = require('express');
const router = express.Router();

// @desc    Get API health status
// @route   GET /api/health
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "CareerLens Backend Running"
  });
});

module.exports = router;
