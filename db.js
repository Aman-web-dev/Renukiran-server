const express = require("express");

const mongoose = require('mongoose');

// require('dotenv').config();



// const URI = process.env.MONGO_URI


const connector = async () => {


  try {

   const connection = await mongoose.connect("mongodb+srv://amanzhx1234:renukiranwebsite@renukiran.kvwesfp.mongodb.net/");

  console.log("Mongo DB connected Successfully please Check")

  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connector();