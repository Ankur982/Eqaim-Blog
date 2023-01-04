import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const BlogTitleCard = () => {
  return (
    <Box 
    width= {"300px"}
    height= {"180px"}
    background= {"#D9D9D9"}
    borderRadius= {"15px"}
    m={"auto"}
    mt={"60px"}
    display={"flex"}
    justifyContent = {"center"}
    alignItems = {"center"}
    >
        <Text 
        fontFamily = {"Inter"}
        fontStyle = {"normal"}
        fontWeight = {"400"}
        fontSize = {"32px"}
        lineHeight = {"39px"}
        color = {"#000000"}
        >
            {"Ankur"}
        </Text>
    </Box>
  )
}
