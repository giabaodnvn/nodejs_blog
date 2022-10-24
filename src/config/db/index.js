const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test_nodejs_dev", {
      useNewUrlParser: true,
      useUnifiedtopology: true,
    });
    console.log("Connect succcessfully!!!");
  } catch (error) {
    console.log("fall");
  }
}

module.exports = { connect };
