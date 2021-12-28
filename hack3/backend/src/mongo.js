import mongoose from "mongoose";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";

async function connect() {
  // TODO 1.1 Connect your MongoDB

  var mongoDB = process.env.MONGO_URL;
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => dataInit())
  .then(() => { console.log("mongo db connection created") })
  .catch((err) => {console.log(err); console.log("error")});  

}

export default { connect };