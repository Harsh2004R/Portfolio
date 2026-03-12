import React from 'react'
import { Box, Image, Text, Flex, Center } from "@chakra-ui/react"
import ProfileImage from "../assets/Profile/Profile_Img.png"

function Me() {
    return (
        <Center
            // border="2px solid coral"
            w="100%" minH={{ base: "130vh", md: "110vh", lg: "110vh" }}
        >


            <Center
                // border="2px solid cyan"
                w={{ base: "90%", md: "68%", lg: "70%" }} minH={{ base: "130vh", md: "100vh", lg: "100vh" }}
                borderRadius={"md"}
                bgColor={"#F2F0EE"}
                p={{ base: "0", md: "4", lg: "4" }}
            >
                <Flex
                    // border={"2px solid yellow"}
                    w="100%" minH="auto" flexDirection={{ base: "column", md: "row", lg: "row" }}>
                    <Image h={{ base: "auto", md: "auto", lg: "auto" }} w={{ base: "100%", md: "300px", lg: "320px" }} src={ProfileImage} alt="My_Profile.png" />
                    <Box flex="1"
                        // border="2px solid purple"
                        h="auto" pl={{ base: "2", md: "3", lg: "5" }}>
                        <Text textAlign={{ base: "center", md: "right", lg: "right" }} mt="0.75rem" mb="0.25rem" color="#58595B" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={"1.125rem"}>README</Text>
                        <Center justifyContent={{ base: "center", md: "right", lg: "right" }} w="100%">
                            <Box bgColor="#e45447" boxSize={"7px"} borderRadius={"full"}>

                            </Box>
                            <Box bgColor="#e45447" w="100px" h="2px">

                            </Box>
                        </Center>

                        <Text textAlign={{ base: "", md: "left", lg: "left" }} mt="0.95rem" fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }} color="#58595B" fontFamily={"bodytext3"}>
                            I am an exceptional software engineer with solid knowledge and
                            experience in the software development and as a
                            person, I have a strong discipline to learn, improve, and
                            evolve.
                        </Text>
                        <Text textAlign={{ base: "", md: "left", lg: "left" }} mt="1rem" fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }} color="#58595B" fontFamily={"bodytext3"}>
                            My expertise lies within the JavaScript
                            ecosystem, Beyond engineering logic, I also have a strong eye for UI/UX design,
                            where creativity meets functionality. I enjoy transforming ideas into intuitive and
                            visually engaging interfaces. For me, great
                            software is not just about writing clean code — it’s about crafting experiences that people
                            genuinely enjoy using.

                        </Text>
                        <Text textAlign={{ base: "", md: "left", lg: "left" }} mt="1rem" fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }} color="#58595B" fontFamily={"bodytext3"}>
                            When I am not coding, I am either playing chess, video
                            games, or watching movies. Other times I am reading newsletters
                            or upskilling.
                        </Text>
                        <Text textAlign={'left'} mt="0.25rem" mb="0.25rem" color="#e45447" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={"0.9rem"}>" Fun Fact "</Text>
                        <Text textAlign={{ base: "", md: "left", lg: "left" }}  fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }} color="#58595B" fontFamily={"bodytext3"}>
                           I am a pretty good Singer & Artist 😁
                        </Text>
                    </Box>

                </Flex>

            </Center>


        </Center>
    )
}

export default Me
