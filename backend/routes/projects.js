const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let projects = await Project.find();
    
    // Seed demo data if empty
    if (projects.length === 0) {
      const demoProjects = [
        { title: "PulsePay – Fintech Wallet", category: "app", image: "💳", technologies: ["Flutter", "Node.js", "MongoDB"], liveLink: "#" },
        { title: "EduForge LMS Platform", category: "web", image: "📚", technologies: ["Next.js", "Tailwind", "PostgreSQL"], liveLink: "#" },
        { title: "MediFlow Hospital ERP", category: "custom", image: "🏥", technologies: ["React", "Express"], liveLink: "#" }
      ];

      await Project.insertMany(demoProjects);
      projects = await Project.find();
    }

    res.json(projects);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;