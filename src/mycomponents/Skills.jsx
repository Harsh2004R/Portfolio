import React from 'react'
import { Box, Text, Image, Flex, Center } from "@chakra-ui/react"
import skills from "../assets/Profile/Skills.png"



function Skills() {
    return (
        <Box p={{ base: "2", md: "14", lg: "16" }} w="100%" minH="100vh"
        // border="1px solid lime"
        >
            <Text pl={{base:"4",md:"0",lg:"0"}} color="#58595B" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={{ base: "1.75rem", md: "2rem", lg: "2.25rem" }}>My Top Skills</Text>
            <Text  pl={{base:"4",md:"0",lg:"0"}} color="#58595B" fontFamily={"bodytext3"} fontSize={{ base: ".95rem", md: "1rem", lg: "1.125rem" }} >
                what I Do
            </Text>
            <Center  pl={{base:"4",md:"0",lg:"0"}} justifyContent={"left"} w="100%">
                <Box mt=".75rem" bgColor="#e45447" boxSize={"7px"} borderRadius={"full"}>

                </Box>
                <Box mt=".75rem" bgColor="#e45447" w="140px" h="3px">

                </Box>
            </Center>


            <Flex mt="2.25rem" w="100%" minH="70vh" bg="#F2F0EE">
                <Box p={{ base: "2", md: "3", lg: "5" }} w="100%" h={{ base: "70vh", md: "70vh", lg: "70vh" }}
                // border="1px solid red"
                >
                    {/* Content Box .................... */}


                    <Text textAlign={"center"} mb="0.75rem" color="#58595B" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={"1.125rem"}>BACKEND</Text>
                    <Text lineHeight={"1.5rem"} textAlign={"justify"} color="#58595B" fontFamily={"bodytext3"} fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }}>
                        I build scalable and maintainable backend applications using cutting-edge technologies like Node.js, Docker, Redis, Express, and MongoDB.
                    </Text>

                    <Text textAlign={"center"} mt="0.75rem" mb="0.75rem" color="#58595B" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={"1.125rem"}>FRONTEND</Text>
                    <Text lineHeight={"1.5rem"} textAlign={"justify"} color="#58595B" fontFamily={"bodytext3"} fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }}>
                        I build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation, using modern tech like Vite (React.js), TailwindCSS, Chakra, and GSAP.
                    </Text>
                    <Text textAlign={"center"} mt="0.75rem" mb="0.75rem" color="#58595B" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={"1.125rem"}>UI/UX</Text>
                    <Text lineHeight={"1.5rem"} textAlign={"justify"} color="#58595B" fontFamily={"bodytext3"} fontSize={{ base: "0.8rem", md: "0.95rem", lg: "1rem" }}>
                        I use tools like Figma, Canva, and other modern design platforms to craft seamless user experiences, wireframes, prototypes, and high-fidelity designs that align perfectly with development workflows usability, accessibility, and modern design principles.
                    </Text>
                </Box>
                <Box display={{ base: "none", md: "flex", lg: "flex" }} w="100%" h={{ base: "70vh", md: "70vh", lg: "70vh" }}
                //  border="1px solid yellow"
                >
                    {/* Skill Image Box ...................................*/}
                    <Image src={skills} alt="skills.png" />
                </Box>

            </Flex>

        </Box>
    )
}

export default Skills
