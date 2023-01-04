import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <Box
      bg={"#383e4e"}
      color="white"
      display={"flex"}
      justifyContent="space-around"
      fontSize={30}
      p="4"
    >
      <Link to="/">
        <Text>Masai Quizine</Text>
      </Link>
    </Box>
  );
};


