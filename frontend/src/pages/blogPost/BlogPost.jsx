import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import home from "../../utils/home.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const BlogPost = () => {
  const navigate  = useNavigate();
  const currentBlog = useSelector((store) => store.currentBlog);
  

  return (
    <Box display={"flex"} w={"90%"} m={"auto"} mt={"30px"}>
      <Box position={"absolute"} top={"30%"}>
        <Box
          width={"80px"}
          height={"70px"}
          background={"#E9E9E9"}
          borderRadius={"20px"}
          m={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image w={"80px"} h={"52px"} src={home} 
          onClick={()=>{
            navigate("/")
          }}
          />
        </Box>
      </Box>
      <Box w={"78.7%"} border={"1px solid"} m={"auto"}>
        <Box
          textAlign={"center"}
          m={"auto"}
          width={"919px"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"300"}
          color={"#767676"}
          mt={"20px"}
        >
          <Text
            fontWeight={"600"}
            fontSize={"40px"}
            lineHeight={"48px"}
            mt={"20px"}
          >
            {currentBlog.title}
          </Text>
          <Image src={currentBlog.image} mt={"20px"} w={"500px"} display={"block"} m={"auto"}  borderRadius={"25px"} boxShadow={"lg"}/>
          <Text
            type="text"
            fontWeight={"300"}
            fontSize={"40px"}
            lineHeight={"48px"}
            mt={"20px"}
          >
            {currentBlog.summary}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
