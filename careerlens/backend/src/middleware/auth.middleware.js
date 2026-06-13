const jwt = require('jsonwebtoken');
const User = require('../models/User');

// ─── Auth Middleware ────────────────────────────────────────────
// Validates the JWT from the Authorization header, finds the
// corresponding user, and attaches it to req.user.
//
// Expected header format:  Authorization: Bearer <token>

const protect = async (req, res, next) => {
  try {
    // 1. Read Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    // 2. Extract token
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    // 3. Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Find user (exclude password from the result)
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    // 5. Attach user to request and continue
    req.user = user;
    next();
  } catch (error) {
    // Handles both invalid and expired tokens
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }
};

module.exports = protect;
