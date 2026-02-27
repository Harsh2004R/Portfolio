import React from 'react'
import { Center, Flex, Spacer, Box, Image, Text } from '@chakra-ui/react'
import my_logo from "../assets/Profile/logo_without_bg.png"





function Navigator() {
    return (
        <Center h={{ base: "50px", md: "60px", lg: "70px" }} borderBottom={"1px solid grey"} p="7">

            <Flex  justify="flex-start" border="1px solid blue">

                <Image w={{ base: "80px", md: "100px", lg: "100px" }} h="20px" src={my_logo} border="1px solid red" />
            </Flex>



            <Flex gap="4" justify="flex-start">
                <Box height="10" width="50px" />
                <Center height="10"
                    _hover={{
                        backgroundColor: "#E45447",
                        "& span": { color: "#ffffff" },
                    }} cursor="pointer"
                    transition="all 0.3s ease"
                    p={{ base: "1", md: "2", lg: "2" }}>
                    <Text as="span" color="#58595B" transition="color 0.2s ease" fontSize={"14px"} fontWeight={"600"} fontFamily={"bodytext3"}>harshsharmaktm03@gmail.com</Text>
                </Center>
                <Box height="10" width="120px" />
            </Flex>




            <Flex border="1px solid lime" gap="4" justify="flex-end">
                <Box height="10" bg="red" width="120px" />
                <Box height="10" bg="green" width="120px">
                    flex-end
                </Box>
                <Box height="10" bg="black" width="120px" />
            </Flex>

        </Center>
    )
}

export default Navigator
