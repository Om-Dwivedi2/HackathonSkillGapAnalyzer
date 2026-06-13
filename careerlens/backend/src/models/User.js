const mongoose = require('mongoose');

// ─── User Schema ────────────────────────────────────────────────
// Represents a registered CareerLens user.
// Each user can have multiple Analysis documents linked via userId.

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model overwrite during hot-reloads
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
