const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    organization: {
      type: String,
      required: false,
      default: "Organization",
    },
    message: {
      type: String,
      required:true,
    },
    contactDate: {
        type: Date,
        default: Date.now,
      },
  });
  
  // Create a model using the schema
  const Contact = mongoose.model('Contact', contactSchema);
  
  // Export the model
  module.exports = Contact;