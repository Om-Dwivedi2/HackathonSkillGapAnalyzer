const express = require('express');
const { signup, login, getCurrentUser } = require('../controllers/auth.controller');
const protect = require('../middleware/auth.middleware');

const router = express.Router();

// ─── Auth Routes ────────────────────────────────────────────────
// POST /api/auth/signup  — Register a new user
// POST /api/auth/login   — Authenticate and get token
// GET  /api/auth/me      — Get current user (protected)

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getCurrentUser);

module.exports = router;
