const mongoose = require('mongoose');

// ─── Reusable Sub-Schemas ───────────────────────────────────────

// Skill with a proficiency level (used for extractedSkills & skillsFound)
const skillWithLevelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
  },
  { _id: false }
);

// Missing skill entry with required level and priority
const missingSkillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    requiredLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    priority: {
      type: String,
      enum: ['Critical', 'High', 'Medium'],
      required: true,
    },
  },
  { _id: false }
);

// Critical gap displayed on the dashboard
const criticalSkillGapSchema = new mongoose.Schema(
  {
    skill: { type: String, required: true },
    currentLevel: { type: String, required: true },
    requiredLevel: { type: String, required: true },
    priority: { type: String, required: true },
  },
  { _id: false }
);

// Single step in the personalized learning roadmap
const learningPathStepSchema = new mongoose.Schema(
  {
    step: { type: Number, required: true },
    skill: { type: String, required: true },
    currentLevel: { type: String, required: true },
    targetLevel: { type: String, required: true },
    estimatedTime: { type: String, required: true },
    topics: [{ type: String }],
  },
  { _id: false }
);

// ─── Analysis Schema ────────────────────────────────────────────
// Each document represents one completed resume analysis.
// A user may have multiple analysis records over time.

const analysisSchema = new mongoose.Schema({
  // Reference to the user who owns this analysis
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },

  // The career role the resume was analyzed against
  targetRole: {
    type: String,
    required: [true, 'Target role is required'],
  },

  // Overall readiness percentage (0–100)
  readinessScore: {
    type: Number,
    required: [true, 'Readiness score is required'],
    min: [0, 'Readiness score cannot be less than 0'],
    max: [100, 'Readiness score cannot exceed 100'],
  },

  // Qualitative readiness band
  readinessLevel: {
    type: String,
    required: [true, 'Readiness level is required'],
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Industry Ready'],
  },

  // ── Skill Arrays ──────────────────────────────────────────────

  // Raw skills extracted from the resume (pre-normalization)
  extractedSkills: [skillWithLevelSchema],

  // Normalized skills matched against the target role requirements
  skillsFound: [skillWithLevelSchema],

  // Skills required by the role but not sufficiently demonstrated
  missingSkills: [missingSkillSchema],

  // Proficiency gaps shown on the dashboard
  criticalSkillGaps: [criticalSkillGapSchema],

  // ── Learning Path ─────────────────────────────────────────────

  // Generated learning roadmap steps
  learningPath: [learningPathStepSchema],

  // ── Metadata ──────────────────────────────────────────────────

  // AI-generated career insight summary
  aiInsight: {
    type: String,
  },

  // Original resume file name for display purposes
  resumeFileName: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model overwrite during hot-reloads
const Analysis =
  mongoose.models.Analysis || mongoose.model('Analysis', analysisSchema);

module.exports = Analysis;
