import './App.css'
import { Center, Box, Text, } from "@chakra-ui/react"
import Home from "./mycomponents/Home.jsx"
function App() {

  return (
    <Center w="100%" pl={{ base: "20px", md: "10%", lg: "12%" }} h="auto"
      pr={{ base: "20px", md: "10%", lg: "12%" }} bg="#F2F0EE"
    >

      <Home />

    </Center>
  )
}

export default App
