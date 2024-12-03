const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://localhost:27017/TC-28_01");

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
