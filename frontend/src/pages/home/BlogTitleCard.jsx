import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlogById } from "../../redux/action";
export const BlogTitleCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBlog = (id) => {
    dispatch(getBlogById(id));
    navigate("/blogs/:id");
  };

  return (
    <Box
      width={"300px"}
      height={"180px"}
      background={"#D9D9D9"}
      borderRadius={"15px"}
      m={"auto"}
      mt={"60px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      onClick={() => handleBlog(blog._id)}
    >
      <Text
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={"400"}
        fontSize={"32px"}
        lineHeight={"39px"}
        color={"#000000"}
      >
        {blog.title}
      </Text>
    </Box>
  );
};
