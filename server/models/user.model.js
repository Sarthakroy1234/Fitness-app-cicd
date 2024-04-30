const mongoose = require('mongoose');

// Define the schema for the user
const userSchema = new mongoose.Schema({
  email: {
    type: String,
   
   
    trim: true,
    lowercase: true,
  },
  contact: {
    type: String,
   
    trim: true,
  },
  name: {
    type: String,
   
    trim: true,
  },
  plan: {
    type: String,
    trim: true,
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the model to use in other files
module.exports = User;
