import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { BlogTitleCard } from "./BlogTitleCard";
import createBlog from "../../utils/createBlog.svg";
export const Home = () => {
  return (
    <Box m="auto" position={"relative"}>
      <SimpleGrid columns={[1, 2, 3]} w="90%" m="auto">
        <BlogTitleCard />
        <BlogTitleCard />
        <BlogTitleCard />
        <BlogTitleCard />
        <BlogTitleCard />
        <BlogTitleCard />
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
        <Image w={"40px"} h={"52px"} src={createBlog} />
      </Box>
    </Box>
  );
};
