const router = require("express").Router();
const multer = require("multer");
const fs = require("fs")
const Blog = require("../models/Blog");
const { Server } = require("http");
const express = require('express');


router.post('/blog', async(req, res) => {
    console.log(req.body)
    try {
        const newBlog = new Blog({
            title: req.body.title,
            summary: req.body.summary,
            image: req.body.image
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


router.get("/blog/:id", async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      res.status(200).send(blog);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  




module.exports = router;