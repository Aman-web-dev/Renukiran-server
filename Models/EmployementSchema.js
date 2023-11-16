const mongoose = require('mongoose');

// Define the schema
const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You might want to add a custom email validation here
  },
  phone: {
    type: String,
    required: true,
  },

  coverLetter: {
    type: String,
    required: true,
  },
  interestedPosition: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
  },
  education: {
    type: String,
  },
  skills: {
    type: [String],
  },

  applicationDate: {
    type: Date,
    default: Date.now,
  },
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;