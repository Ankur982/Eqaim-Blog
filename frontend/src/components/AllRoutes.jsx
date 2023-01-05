import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { PublishBlog } from "../pages/publishBlog/PublishBlog";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addBlog" element={<PublishBlog />} />
    
    </Routes>
  );
};

export default AllRoutes;
