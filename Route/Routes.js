import express from 'express';
import User from '../models/userSchema.js';
const route = express.Router();

// create api / Create
route.post('/', async (req, res) => {
  try {
    const newUser = await User(req.body);
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// api for getting data / Read
route.get('/', async (req, res) => {
  try {
    const allUser = await User.find();
    res.send(allUser);
  } catch (error) {
    res.send({ error: error.message });
  }
});

// delete api / Delete
route.delete('/:id', async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
  } catch (error) {
    res.send({ error: error.message });
  }
});



// delete api / Delete
route.put('/:id', async (req, res) => {
  try {
    const completedTask = await User.findByIdAndUpdate(req.params.id, req.body);
    res.send(completedTask);
  } catch (error) {
    res.send({ error: error.message });
  }
});

export default route;
