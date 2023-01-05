import React, { useEffect } from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { BlogTitleCard } from "./BlogTitleCard";
import createBlog from "../../utils/createBlog.svg";
import { getBlogs } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const blogs = useSelector((store) => store.blogs);
  const reversedBlogs = [...blogs].reverse();

  useEffect(()=>{
    dispatch(getBlogs())
  },[])


  return (
    <Box m="auto" position={"relative"}>
      <SimpleGrid columns={[1, 2, 3]} w="90%" m="auto">
        {
           reversedBlogs.map((el, i) => (
          <BlogTitleCard key={i} blog={el}/>
        ))
        }
      </SimpleGrid>
      <Box
        position={"absolute"}
        right={"70px"}
        width={"80px"}
        height={"70px"}
        background={"#E9E9E9"}
        borderRadius={"20px"}
        m={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image w={"40px"} h={"52px"} src={createBlog} onClick={()=>{
          navigate("/addBlog")
        }}/>
      </Box>
    </Box>
  );
};
