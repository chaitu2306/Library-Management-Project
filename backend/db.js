// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://chaitu:mongo-chaitu123@cluster0.ec8lngb.mongodb.net/library?retryWrites=true&w=majority';

    // Modern Mongoose 7 connection (no deprecated options needed)
    await mongoose.connect(mongoUri);

    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
