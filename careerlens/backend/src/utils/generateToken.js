const jwt = require('jsonwebtoken');

// ─── Generate JWT ───────────────────────────────────────────────
// Creates a signed JWT containing the userId in its payload.
// Token expiry is controlled via the JWT_EXPIRES_IN env variable.

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

module.exports = generateToken;
