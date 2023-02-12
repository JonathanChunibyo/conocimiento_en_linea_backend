const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  email: {
    type: String,
    required: [true, 'The email is required']
  },
  password: {
    type: String,
    required: [true, 'The password is required']
  },
  age: {
    type: Number,
    required: [true, 'The age is required']
  }
});

const User = model('Users', usersSchema);

module.exports = User;