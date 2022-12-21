const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const server = `localhost`
const database = `blog`
const MONGODB_URL = `mongodb://${server}:27017/${database}`

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });