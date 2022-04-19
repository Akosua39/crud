const mongoose = require("mongoose");

const dbCconnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");
    console.log("db connect succesfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  dbCconnect,
};
