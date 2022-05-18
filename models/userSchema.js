import mongoose from 'mongoose';

// create api

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  todoTask: {
    type: String,
    required: true,
  },
  todoDescription: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
export default User;
