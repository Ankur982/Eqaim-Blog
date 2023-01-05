import React from "react";
import { Route, Routes } from "react-router-dom";
import { BlogPost } from "../pages/blogPost/BlogPost";
import { Home } from "../pages/home/Home";
import { PublishBlog } from "../pages/publishBlog/PublishBlog";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addBlog" element={<PublishBlog />} />
      <Route path="/blogs/:id" element={<BlogPost />} />
    
    </Routes>
  );
};

export default AllRoutes;
