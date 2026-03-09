import React from 'react'
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Box, Text, Image, Flex, Center, Heading } from "@chakra-ui/react";
import profile from "../assets/Profile/profile_croped.png"


function Profile() {
    return (
        <>
            <Flex flexDirection={{ base: "column", md: "row", lg: "row" }} w="100%" minH={{ base: "90vh", md: "100vh", lg: "100vh" }} >
                <Center display={{ base: "none", md: "flex", lg: "flex" }} h="100vh" w="10%">
                    <Flex flexDirection={"column"} h="30vh" justifyContent={"space-between"}>
                        <Box _hover={{ cursor: "pointer" }}>
                            <FaLinkedin size="28px" color="#58595B" />
                        </Box>

                        <Box _hover={{ cursor: "pointer" }}>
                            <FaInstagram size="28px" color="#58595B" />
                        </Box>

                        <Box _hover={{ cursor: "pointer" }}>
                            <FaTwitter size="28px" color="#58595B" />
                        </Box>

                        <Box _hover={{ cursor: "pointer" }}>
                            <FaGithub size="28px" color="#58595B" />
                        </Box>
                    </Flex>
                </Center>

                <Center flexDirection="column" w={{ base: "100%", md: "40%", lg: "40%" }} h={{ base: "50vh", md: "100vh", lg: "100vh" }}>
                    <Box>
                        <Heading textAlign={"center"} lineHeight="1" letterSpacing={"1.5px"} color="#58595B" fontFamily={"bodytext4"} fontSize={{ base: "5xl", md: "5xl", lg: "4rem" }}>Harsh</Heading>
                        <Heading lineHeight="1" letterSpacing={"1.5px"} color="#58595B" fontFamily={"bodytext4"} fontSize={{ base: "5xl", md: "5xl", lg: "4rem" }}>Sharma</Heading>
                    </Box>

                    <Text mt="20px" color="#58595B" fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"500"} fontFamily={"bodytext3"}>
                        SOFTWARE ENGINEER
                    </Text>

                    <Box p={{ base: "14", md: "14", lg: "20" }}>
                        <Text textAlign={"justify"} color="#58595B" fontSize={{ base: "12px", md: "13px", lg: "13px" }} fontFamily={"bodytext1"}>
                            Hey ✌ I am Harsh Sharma Software Developer from Khatima (Uttarakhand), with rock-solid experience in building complex applications with trending technologies.
                        </Text>
                    </Box>
                </Center>
                <Center p="4" w={{ base: "100%", md: "50%", lg: "50%" }} h={{ base: "40%", md: "100vh", lg: "100vh" }}>
                    <Image

                        src={profile}
                        boxSize={{ base: "280px", md: "470px", lg: "550px" }}
                        borderBottomLeftRadius="full"
                        borderBottomRightRadius="full"
                        fit="cover"
                        alt="Profile.png"
                    />
                </Center>
            </Flex>

        </>
    )
}

export default Profile
