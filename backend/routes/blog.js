const router = require("express").Router();
const multer = require("multer");
const fs = require("fs")
const Blog = require("../models/Blog");
const { Server } = require("http");
const express = require('express');

router.use(express.static(__dirname+"./uploads")) 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });



router.post('/blog', upload.single("file"), async(req, res) => {
    try {
        const newBlog = new Blog({
            title: req.body.title,
            summary: req.body.summary,
            image: req.file.filename
        });
        await newBlog.save();
        res.status(200).send(newBlog);
    } catch (err) {
        res.status(500).json('Server Error....!');
    }



});



router.get("/blog", async (req, res) => {
    try {
        const blogs = await Blog.find(); 
        res.status(200).send(blogs);
    } catch (e) {
        res.status(404).send(e);
    }
});




module.exports = router;