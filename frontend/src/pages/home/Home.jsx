import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/react";
import { BlogTitleCard } from './BlogTitleCard';
export const Home = () => {
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3]} w="90%" m="auto" >
     
          <BlogTitleCard />
          <BlogTitleCard />
          <BlogTitleCard />
   
      </SimpleGrid>
    </Box>
  )
}
