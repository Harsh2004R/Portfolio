import Navigator from './Navigator'
import { Box, Text } from '@chakra-ui/react'
import Profile from "./Profile"
import Skills from "./Skills"
import Me from "./Me"
import Work from "./Work"


function Home() {
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" borderRadius={"md"}
      w={"100%"} bg="#ffffff" minH="auto" pb={{ base: "25px", md: "50px", lg: "60px" }}
      mt={{ base: "25px", md: "50px", lg: "60px" }}


    >

      <Navigator />
      <Profile />
      <Skills />
      <Me />
      <Work />


    </Box>
  )
}

export default Home
