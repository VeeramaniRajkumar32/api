const express = require("express");
const catRouter = require("./router/categoryRouter");
const bodyParser = require("body-parser");
const PORT = 8000;
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(catRouter);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
