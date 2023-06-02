const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected mongoodb server ${mongoose.connection.host}`.bgMagenta.blue);
    }
    catch (error) {
        console.log(`MongoDB server is error : ${error}`.bgRed.bgCyan);
    }
};

module.exports = connectDB;