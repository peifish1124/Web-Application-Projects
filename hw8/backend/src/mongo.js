import mongoose from "mongoose";
import dotenv from "dotenv-defaults";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { console.log("mongo db connection created") })
  .catch((err) => {console.log(err); console.log("error")});

const db = mongoose.connection;
export default db;