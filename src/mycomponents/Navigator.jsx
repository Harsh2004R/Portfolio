import React from 'react'
import { Center, Flex, Spacer, Box, Image, Text } from '@chakra-ui/react'
import { FaUserTie, FaFile } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import my_logo from "../assets/Profile/logo_without_bg.png"





function Navigator() {
    return (
        <Center h={{ base: "50px", md: "60px", lg: "70px" }} borderBottom={"1px solid grey"} p="7">

            <Box display={{ base: "none", md: "flex", lg: "flex" }} w="100%"
            // border="1px solid coral"
            >
                <Flex cursor={"pointer"}
                    //  border="1px solid coral"
                    justify="flex-start" align={"center"}>

                    <Image w={{ base: "80px", md: "100px", lg: "100px" }} h="20px" src={my_logo} />
                </Flex>



                <Flex flex="1" gap="4" justify="flex-start">
                    <Box height="10" width="50px" />
                    <Center height="10"
                        _hover={{
                            backgroundColor: "#E45447",
                            transform: "rotate(-4deg)",
                            transformOrigin: "left bottom",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
                            "& span": { color: "#ffffff" },
                        }} cursor="pointer"
                        transition="all 0.3s ease"
                        p={{ base: "1", md: "2", lg: "2" }}>
                        <Text letterSpacing={"0.5px"} as="span" color="#58595B" transition="color 0.2s ease" fontSize={"14px"} fontWeight={"600"} fontFamily={"bodytext3"}>harshsharmaktm03@gmail.com</Text>
                    </Center>
                    <Box height="10" width="120px" />
                </Flex>




                <Flex flex="1"
                    //  border="1px solid lime"
                    gap="2" justify="flex-end">
                    <Center
                        color="#58595B"
                        _hover={{
                            backgroundColor: "#E45447",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
                            transform: "rotate(-8deg)",
                            transformOrigin: "left bottom",
                            "& span": { color: "#ffffff" },
                        }} cursor="pointer"
                        transition="all 0.3s ease"
                        height="10" width="120px" >
                        <FaFile />
                        <Text as="span" ml="5px" transition="color 0.2s ease" fontFamily={"bodytext1"} fontWeight={"500"}>Works</Text></Center>
                    <Center
                        color="#58595B"
                        _hover={{
                            backgroundColor: "#E45447",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
                            transform: "rotate(-8deg)",
                            transformOrigin: "left bottom",
                            "& span": { color: "#ffffff" },
                        }} cursor="pointer"
                        transition="all 0.3s ease"
                        height="10" width="120px" >
                        <FaUserTie />
                        <Text ml="5px" as="span" transition="color 0.2s ease" fontFamily={"bodytext1"} fontWeight={"500"}>Resume</Text></Center>
                    <Center
                        color="#58595B"
                        _hover={{
                            backgroundColor: "#E45447",
                            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
                            transform: "rotate(-8deg)",
                            transformOrigin: "left bottom",
                            "& span": { color: "#ffffff" },
                        }} cursor="pointer"
                        transition="all 0.3s ease"
                        height="10" width="120px" >
                        <MdContactPage />
                        <Text ml="5px" as="span" transition="color 0.2s ease" fontFamily={"bodytext1"} fontWeight={"500"}>Shelf</Text></Center>
                </Flex>

            </Box>

        </Center>
    )
}

export default Navigator
