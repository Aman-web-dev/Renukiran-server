const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: false,
      sparse:true
    },
    subject: {
      type: String,
      required: false,
      unique:false,
      default: "Organization",
    },
    message: {
      type: String,
      required:true,
      unique:false,
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