import react, { useState, useEffect, Suspense, lazy } from "react";
import './App.css'
import "./assets/fonts.css";
import { Center, Box, Text, Spinner } from "@chakra-ui/react"
const Home = lazy(() => import("./mycomponents/Home.jsx"));
const Footer = lazy(() => import("./mycomponents/Footer.jsx"));
import {API_BASE_URL} from "./utils/base-url/index.js"



function App() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState({});
  const ping = async () => {
    // console.log("ping")
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/ping`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setData(data);
      if (data) setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log("err", error)
    }
  };

  useEffect(() => {
    ping();
  }, []);
  return (
    <Suspense
      fallback={<Spinner />}
    >
      <Center flexDirection={"column"} w="100%" pl={{ base: "10px", md: "10%", lg: "12%" }} h="auto"
        pr={{ base: "10px", md: "10%", lg: "12%" }} bg="#F2F0EE"
      >

        <Home />
        <Footer load={load} data={data} />



      </Center>
    </Suspense>

  )
}

export default App
