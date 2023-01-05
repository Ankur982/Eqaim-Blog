import React from "react";
import { Box, Image, Input, Text, Textarea } from "@chakra-ui/react";
import home from "../../utils/home.svg";
import post from "../../utils/post.svg";
export const PublishBlog = () => {
  let [title, setTitle] = React.useState("");
  let [summary, setSummary] = React.useState("");
  let [image, setImage] = React.useState("");
console.log("fasdbf",image)
  return (
    <Box display={"flex"} w={"90%"} m={"auto"} mt={"30px"}>
      <Box display={"flex"} flexDirection={"column"} gap={"30px"} position={"absolute"} top={"30%"}>
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
          <Image w={"80px"} h={"52px"} src={home} />
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
          <Image w={"70px"} h={"52px"} src={post} />
        </Box>
      </Box>
      <Box w={"78.7%"} border={"1px solid"} m={"auto"}>
        <Box
          m={"auto"}
          width={"919px"}
          height={"443px"}
          fontFamily={"Inter"}
          fontStyle={"normal"}
          fontWeight={"300"}
          textAlign={"justify"}
          color={"#767676"}
          mt={"20px"}
        >
          <Input
            value={title}
            placeholder="Enter Title"
            fontWeight={"600"}
            fontSize={"40px"}
            lineHeight={"48px"}
            mt={"20px"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Input type="file" multiple={false} mt={"20px"}  onChange={({ e }) => setImage( e)}/>
          <Textarea
            fontWeight={"300"}
            fontSize={"40px"}
            lineHeight={"48px"}
            value={summary}
            name={"file"}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
            mt={"20px"}
            placeholder="Ener content"
          />
        </Box>
      </Box>
    </Box>
  );
};
