const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: false,

  },
  email: {
    type: String,
    required: true,
    unique: true,
    unique: false,
  },
  phone: {
    type: String,
    required: true,
    unique: false,
  },

  coverLetter: {
    type: String,
    required: true,
    unique: false,
  },

  jobTitle: {
    type: String,
    required: true,
    unique: false,
  },

  education: {
    type: String,
    unique: false,
  },

  address:{

    type:Object,
    required:true,
    unique: false,

  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;