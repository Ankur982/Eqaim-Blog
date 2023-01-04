const mongoose = require("mongoose");


const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString()
    }


}, { timestamps: true });


module.exports = mongoose.model("Blog", BlogSchema);