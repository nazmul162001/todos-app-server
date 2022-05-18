import express from 'express';
import route from './Route/Routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
// import port from ""
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

// mongoose connect
mongoose.connect(process.env.MONGODB_URI, () => {
  console.log('mongodb connected');
});

// middleware
app.use(bodyparser.json());
app.use('/api/user', route);

app.listen(port, () => {
  console.log('server connected');
});
