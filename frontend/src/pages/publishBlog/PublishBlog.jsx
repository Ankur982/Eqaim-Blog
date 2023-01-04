import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import home from "../../utils/home.svg"
export const PublishBlog = () => {
  return (
    <Box>
      <Box>

      </Box>
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
        <Image w={"40px"} h={"52px"} src={home} />
      </Box>
    </Box>
  )
}
