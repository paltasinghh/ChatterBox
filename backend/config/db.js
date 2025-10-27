const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    if (!process.env.VITE_MONGO_URI) {
      throw new Error("VITE_MONGO_URI is undefined. Check .env file");
    }

    const conn = await mongoose.connect(process.env.VITE_MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
