import './App.css'
import "./assets/fonts.css";
import { Center, Box, Text, } from "@chakra-ui/react"
import Home from "./mycomponents/Home.jsx"
import Footer from './mycomponents/Footer';



function App() {

  return (
    <Center flexDirection={"column"} w="100%" pl={{ base: "10px", md: "10%", lg: "12%" }} h="auto"
      pr={{ base: "10px", md: "10%", lg: "12%" }} bg="#F2F0EE"
    >

      <Home />
      <Footer />

    </Center>
  )
}

export default App
