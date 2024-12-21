import express from 'express';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { error } from 'console';
// dotenv.config();

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


mongoose.connect("mongodb+srv://ahmed1000:ahmed1000@mern.oq2ns.mongodb.net/?retryWrites=true&w=majority&appName=mern").then(() => {
  console.log("Conntected");
})
.catch((error) =>{
  console.log(error);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);



app.use((err, req, res, next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  });
});