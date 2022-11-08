const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRouter = require("./routes/project");

const app = express();
const port = process.env.PORT || 3000;
const db =
  "mongodb+srv://steins:root@cluster0.pvovcjk.mongodb.net/steins-portfolio";

app.use(cors());
app.use(express.json());
app.use(projectRouter);

mongoose
  .connect(db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
