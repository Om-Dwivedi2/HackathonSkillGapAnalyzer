export const mockAnalysis = {
  targetRole: "Backend Engineer",

  readinessScore: 68,

  readinessLevel: "Intermediate",

  skillsFound: [
    {
      name: "HTML",
      level: "Advanced"
    },
    {
      name: "CSS",
      level: "Advanced"
    },
    {
      name: "JavaScript",
      level: "Advanced"
    },
    {
      name: "React",
      level: "Advanced"
    },
    {
      name: "Git",
      level: "Advanced"
    },
    {
      name: "GitHub",
      level: "Advanced"
    },
    {
      name: "Bootstrap",
      level: "Advanced"
    },
    {
      name: "REST API",
      level: "Intermediate"
    },
    {
      name: "Postman",
      level: "Intermediate"
    },
    {
      name: "SQL",
      level: "Intermediate"
    },
    {
      name: "Linux",
      level: "Beginner"
    },
    {
      name: "CI/CD",
      level: "Beginner"
    }
  ],

  missingSkills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Docker"
  ],

  additionalSkills: [
    "Firebase",
    "Redux",
    "GraphQL"
  ],

  criticalSkillGaps: [
    {
      skill: "Node.js",
      priority: "Critical",
      currentLevel: "Beginner",
      requiredLevel: "Intermediate"
    },
    {
      skill: "Express.js",
      priority: "Critical",
      currentLevel: "Not Detected",
      requiredLevel: "Beginner"
    },
    {
      skill: "MongoDB",
      priority: "High",
      currentLevel: "Beginner",
      requiredLevel: "Intermediate"
    },
    {
      skill: "Docker",
      priority: "Medium",
      currentLevel: "Not Detected",
      requiredLevel: "Beginner"
    }
  ],

  learningPath: [
    {
      step: 1,
      skill: "Node.js",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      estimatedTime: "1-2 Weeks"
    },
    {
      step: 2,
      skill: "Express.js",
      currentLevel: "Not Detected",
      targetLevel: "Beginner",
      estimatedTime: "1 Week"
    },
    {
      step: 3,
      skill: "MongoDB",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      estimatedTime: "1 Week"
    },
    {
      step: 4,
      skill: "JWT Authentication",
      currentLevel: "Not Detected",
      targetLevel: "Beginner",
      estimatedTime: "3 Days"
    }
  ],

  aiInsight:
    "You already possess strong frontend fundamentals. To become a competitive Backend Engineer, focus first on Node.js and Express.js, as they unlock most backend development workflows. Strengthening your database skills with MongoDB and implementing secure authentication using JWT will significantly improve your readiness score.",

  roadmapUrl: "https://roadmap.sh/backend",

  analysisDate: "12 June 2026, 10:45 AM",

  resumeFileName: "Resume_John.pdf"
};
