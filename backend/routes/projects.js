const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let projects = await Project.find();

    // Seed demo data if no projects exist
    if (projects.length === 0) {
      const demoProjects = [
        {
          title: "PulsePay – Fintech Wallet",
          category: "app",
          image: "💳",
          description: "Digital wallet with UPI, investments & credit score",
          technologies: ["Flutter", "Node.js", "MongoDB"],
          liveLink: "#"
        },
        {
          title: "EduForge LMS Platform",
          category: "web",
          image: "📚",
          description: "Enterprise learning management system",
          technologies: ["Next.js", "Tailwind", "PostgreSQL"],
          liveLink: "#"
        },
        {
          title: "MediFlow – Hospital ERP",
          category: "custom",
          image: "🏥",
          description: "Complete hospital management suite",
          technologies: ["React", "Express", "Redis"],
          liveLink: "#"
        }
      ];

      await Project.insertMany(demoProjects);
      projects = await Project.find();
    }

    res.json(projects);
  } catch (err) {
    console.error("Error in /api/projects:", err);
    res.status(500).json({ 
      error: "Failed to fetch projects",
      message: err.message 
    });
  }
});

module.exports = router;