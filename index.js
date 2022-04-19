const express = require("express");
const { dbCconnect } = require("./config/dbConnect");
const postRouter = require("./routes/posts.router");

const app = express();

app.use(express.json());

app.use("/", postRouter);

const start = async () => {
  await dbCconnect();

  app.listen(4000, () => {
    console.log("🚀 server up and running");
  });
};

start();
