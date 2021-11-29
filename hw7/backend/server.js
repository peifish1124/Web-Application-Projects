import express from 'express';
import cors from 'cors';
import scoreRoute from './src/routes/index.js';
import mongoose from 'mongoose';
import dotenv from "dotenv-defaults"; 
dotenv.config();


var mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { console.log("mongo db connection created") })
  .catch((err) => {console.log(err); console.log("error")});



const app = express();

//init middleware
app.use(cors());
app.use(express.json());

//define routes
app.use('/api',scoreRoute);

//define server
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
})