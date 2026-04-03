const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  category: { 
    type: String, 
    enum: ['web', 'app', 'design', 'custom'],
    required: true 
  },
  technologies: [String],
  liveLink: String
});

module.exports = mongoose.model('Project', projectSchema);