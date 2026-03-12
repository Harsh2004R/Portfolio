import React from 'react'
import { Center, Flex, Spacer, Box, Image, Text } from '@chakra-ui/react'
import { FaUserTie, FaFile } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import my_logo from "../assets/Profile/logo_without_bg.png"
import { Spinner } from "@chakra-ui/react"




function Footer({ load, data }) {
    console.log("load:", load, "data:", data)
    return (
        <>
            <Center flexDirection={"column"} w="100%" h="auto" gap="5" borderBottom={"1px solid grey"} pt={{ base: "8", md: "12", lg: "14" }} pb={{ base: "10", md: "12", lg: "14" }}>

                <Box display={{ base: "flex", md: "flex", lg: "flex" }} flexDirection={{ base: "column", md: "row", lg: "row" }} w="100%"
                // border="1px solid coral"
                >
                    <Flex cursor={"pointer"}
                        p={{ base: "10px", md: "0", lg: "0" }}
                        justify={{ base: "center", md: "flex-start", lg: "flex-start" }} align={"center"}>

                        <Image w={{ base: "80px", md: "100px", lg: "100px" }} h="25px" src={my_logo} />
                    </Flex>

                    <Flex flex="1"
                        //  border="1px solid lime"
                        alignItems={"center"}
                        gap={{ base: "1", md: "3", lg: "3" }} p={{ base: "10px", md: "0", lg: "0" }} justify={{ base: "center", md: "flex-end", lg: "flex-end" }}>
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
                            p={{ base: "2", md: "2", lg: "3" }} h="30px">

                            <Text fontSize="xs" as="span" ml="5px" transition="color 0.2s ease" fontFamily={"bodytext1"}>WORKS</Text></Center>
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
                            p={{ base: "2", md: "2", lg: "3" }} h="30px" >

                            <Text fontSize="xs" ml="5px" as="span" transition="color 0.2s ease" fontFamily={"bodytext1"}>RESUME</Text></Center>
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
                            p={{ base: "2", md: "2", lg: "3" }} h="30px" >

                            <Text fontSize="xs" ml="5px" as="span" transition="color 0.2s ease" fontFamily={"bodytext1"} >SHELF</Text></Center>
                    </Flex>



                    <Flex flex="1" gap="4" justify={{ base: "center", md: "flex-end", lg: "flex-end" }} >
                        <Center height="10"
                            p={{ base: "1", md: "2", lg: "2" }}>
                            {data?.year ? (
                                <Text
                                    fontSize="xs"
                                    letterSpacing="0.5px"
                                    as="span"
                                    color="#58595B"
                                    fontFamily="bodytext3"
                                >
                                    ©{data.year} Harsh Sharma all rights reserved
                                </Text>
                            ) : (
                                <Spinner
                                    color="red.500"
                                    css={{ "--spinner-track-color": "colors.gray.200" }}
                                />
                            )}
                        </Center>
                    </Flex>






                </Box>

                <Flex w="100%" h="0.75rem" >
                    <Box flex="1" bg="#E45447"></Box>
                    <Box flex="1" bg="#E29D51"></Box>
                    <Box flex="1" bg="#D8C7B8"></Box>
                    <Box flex="1" bg="#607393"></Box>
                </Flex>


            </Center>

        </>
    )
}

export default Footer
