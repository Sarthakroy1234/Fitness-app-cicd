const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const mongoURI = "mongodb+srv://praduman:praduman123@cluster0.w4xafgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const userRouter = require('./routes/user.route.js');
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running in port 8000");
});

app.use('/api/user',userRouter);
