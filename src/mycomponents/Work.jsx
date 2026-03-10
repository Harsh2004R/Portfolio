import React from 'react'
import { Box, Text, Image, Flex, Grid, Center } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";




function Work() {

    const UIUX = [
        {
            id: 1,
            title: "Laundry Application UI",
            description: "This Application is designed to solve problem of unavailability of laundry services in Tear-1 and Tear-2 or hostel areas.",
            image: "https://res.cloudinary.com/djbe55v48/image/upload/v1773159606/Portfolio/Laundry_App_ylmjrt.png",
            tools: "Figma & many more",
            liveurl: "https://www.figma.com/design/IZku0r2VHklQJ6wWlX0XTG/Laundry-Application-UIUX?node-id=0-1&t=RD6K8TC8tpySgI96-1",


        }
    ]
    const projects = [
        {
            id: 1,
            title: "DJI global Platform",
            description:
                "A fully functional clone of the DJI official website with complete email authentication, payment processing, and identical UI. Experience the same user interface and functionality as the original | MERN|",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757338864/Portfolio/dji_dcqkj6.png",
            technologies: [
                "React.js",
                "Node.js",
                "MongoDB",
                "Razorpay",
                "Chakra UI",
                "Cloudinary",
                "Render",
            ],
            liveUrl: "https://dji-global.netlify.app/",
            githubUrl: "https://github.com/Harsh2004R/drone_site",
            category: "fullstack",
            featured: true,
        },
        {
            id: 2,
            title: "Dare To Visit",
            description:
                "A horror app including horror images, videos, podcasts, and more. It offers own social media platform for sharing contents, offers virtual horror tours, shocking experiences like predicting your death etc.",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757338864/Portfolio/DTV_qasgtn.png",
            technologies: [
                "React.js",
                "Node.js",
                "MongoDB",
                "SMTP",
                "Node-Mailer",
                "Zustand store",
            ],
            liveUrl: "https://dare-to-visit.netlify.app",
            githubUrl: "https://github.com/Harsh2004R/DTV",
            category: "fullstack",
            featured: true,
        },
        {
            id: 3,
            title: "Blog CMS",
            description:
                "A modern student / candidate needy portfolio website with all features required in a job ready portfolio. Including automatic mailing system and behind the seen section. ",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757338865/Portfolio/port2k24_tozuax.png",
            technologies: [
                "Magin UI",
                "Tailwind css",
                "React.js",
                "Netlify",
                "Framer motion",
            ],
            liveUrl: "https://cwd-portfolio2k24.netlify.app/",
            githubUrl: "https://github.com/Harsh2004R/portfolio_2k24",
            category: "frontend",
            featured: false,
        },
        {
            id: 4,
            title: "Cors Web Duo",
            description:
                "An industry ready professional portfolio allows user to explore company insides and cantact to join coding club, offer service or consume services.",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757338860/Portfolio/CWD_ksewjj.png",
            technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
            liveUrl: "https://cors-web-duo.netlify.app/",
            githubUrl: "https://github.com/Harsh2004R/CorsWebDuo-",
            category: "fullstack",
            featured: true,
        },
        {
            id: 5,
            title: "Carters E-comerce",
            description:
                "A Collaborative Construct week project Masai School Batch(JS201). This is a clone of carters.com Members of Project group are Ayush kr Shanu,Manideep Peddaboini,Harsh Sharma,Sambhaji Dhore,Mohd Sharique",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757339119/Portfolio/carters_srkfpe.png",
            technologies: ["HTML", "CSS", "Java Script", "JSON Server", "Railway"],
            liveUrl: "https://adorable-raindrop-e0f0b2.netlify.app",
            githubUrl: "https://github.com/Ayush-kr-shanu/carters.com",
            category: "frontend",
            featured: false,
        },
        {
            id: 6,
            title: "Github repo viewer",
            description:
                "A simple and user friendly mini project where user can view others github profile on this platform.",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757339512/Portfolio/github-repo-viewer_engx49.png",
            technologies: ["Vite"],
            liveUrl:
                "https://git-hub-repository-viewer-7yvulw3f2-harsh2004r.vercel.app/",
            githubUrl: "https://github.com/Harsh2004R/gitHub_repository_viewer",
            category: "frontend",
            featured: false,
        },
        {
            id: 7,
            title: "Generic Pagination",
            description:
                "React application that demonstrates pagination functionality using the @ajna/pagination library and includes sorting and filtering features. The app also uses the Chakra UI library for the user interface.",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757339511/Portfolio/pagination_ijwts6.png",
            technologies: ["React.js", "Chakra UI", "Ajna-npm", "Netlify"],
            liveUrl: "https://pagination-j19gkomcg-harsh2004r.vercel.app/",
            githubUrl: "https://github.com/Harsh2004R/sorting_filtering_pagination",
            category: "frontend",
            featured: false,
        },
        {
            id: 8,
            title: "API Gateway",
            description:
                "A microservices API gateway with authentication, rate limiting, and request routing capabilities.",
            image:
                "https://res.cloudinary.com/djbe55v48/image/upload/v1757342985/Portfolio/api_hhmhmb.jpg",
            technologies: ["Node.js", "Express", "Multer", "Cloudinary"],
            liveUrl: "https://drone-site-be2k24.onrender.com/",
            githubUrl: "https://github.com/Harsh2004R/drone_site_BE2k24",
            category: "backend",
            featured: false,
        },
    ];
    return (
        <Box p={{ base: "2", md: "14", lg: "16" }} w="100%" minH="100vh" >
            <Text pl={{ base: "4", md: "0", lg: "0" }} color="#58595B" fontFamily={"bodytext3"} fontWeight={"600"} fontSize={{ base: "1.75rem", md: "2rem", lg: "2.25rem" }}>My Works</Text>
            <Text pl={{ base: "4", md: "0", lg: "0" }} color="#58595B" fontFamily={"bodytext3"} fontSize={{ base: ".95rem", md: "1rem", lg: "1.125rem" }} >
                few of my past and present projects
            </Text>
            <Center pl={{ base: "4", md: "0", lg: "0" }} justifyContent={"left"} w="100%">
                <Box mt=".75rem" bgColor="#e45447" boxSize={"7px"} borderRadius={"full"}>

                </Box>
                <Box mt=".75rem" bgColor="#e45447" w="140px" h="3px">

                </Box>
            </Center>

            <Text mt="0.75rem" pl={{ base: "4", md: "0", lg: "0" }} color="#58595B" fontFamily={"bodytext3"} fontWeight={"500"} fontSize={{ base: "1.25rem", md: "1.35rem", lg: "1.55rem" }}>Web Applications</Text>

            {/* PROJECT GRID */}

            <Grid
                mt="10"
                gap="8"
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2,1fr)",
                    lg: "repeat(2,1fr)"
                }}
            >

                {projects.map((project) => (

                    <Box
                        key={project.id}
                        position="relative"
                        overflow="hidden"
                        borderRadius="12px"
                        role="group"
                        cursor="pointer"
                        boxShadow="lg"
                    // border={"1px solid red"}
                    >
                        {/* IMAGE */}

                        <Image
                            src={project.image}
                            w="100%"
                            h={{ base: "180px", md: "180px", lg: "300px" }}
                            objectFit="cover"
                            transition="0.4s"
                            _groupHover={{
                                transform: "scale(1.05)"
                            }}
                        />

                        {/* HOVER OVERLAY */}

                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"> <Flex
                            position="absolute"

                            left="0"
                            bottom={"0"}
                            w="100%"
                            h="60%"
                            // bg="#52607A"
                            // bg="#2d3748"
                            bg="#6379a199"
                            opacity="0"
                            transition="0.35s"
                            // transform="translateY(100%)"
                            _hover={{
                                opacity: "0.92",
                                transform: "translateY(0%)"
                            }}
                            flexDirection="column"
                            justify="center"
                            p="6"
                            color="white"
                        >

                            <Flex w="100%" justifyContent={"space-between"}>
                                <Text
                                    // fontFamily={"Headers"}
                                    fontFamily={"SubHeaders"}
                                    fontWeight="500"
                                    fontSize="xl"
                                    mb="2" mr="5px"
                                >
                                    {project.title}
                                </Text>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">  <FaGithub color="#1E88E5" size={"30px"} /></a>
                            </Flex>

                            <Text
                                fontFamily={"bodytext4"}
                                fontSize="sm"
                                mb="4"
                                lineHeight="1.6"
                            >
                                {project.description}
                            </Text>
                            <Text
                                fontFamily={"bodytext3"}
                                fontWeight="600"
                                fontSize="xs"
                                mb="2"
                                color="#1E88E5"
                            >
                                {project.technologies.join(", ")}
                            </Text>
                        </Flex>
                        </a>


                    </Box>

                ))}
            </Grid>


            {/* Native Application Grid */}

            <Text mt="2.75rem" pl={{ base: "4", md: "0", lg: "0" }} color="#58595B" fontFamily={"bodytext3"} fontWeight={"500"} fontSize={{ base: "1.25rem", md: "1.35rem", lg: "1.55rem" }}>Native UI/UX</Text>

            <Grid
                mt="10"
                gap="8"
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2,1fr)",
                    lg: "repeat(2,1fr)"
                }}
            >
                {UIUX.map((project) => (

                    <Box
                        key={project.id}
                        position="relative"
                        overflow="hidden"
                        borderRadius="12px"
                        role="group"
                        cursor="pointer"
                        boxShadow="lg"
                    >

                        {/* IMAGE */}

                        <Image
                            src={project.image}
                            w="100%"
                            h={{ base: "180px", md: "180px", lg: "300px" }}
                            objectFit="cover"
                            transition="0.4s"
                            _groupHover={{
                                transform: "scale(1.05)"
                            }}
                        />

                        {/* HOVER OVERLAY */}

                        <a href={project.liveurl} target="_blank" rel="noopener noreferrer"> <Flex
                            position="absolute"

                            left="0"
                            bottom={"0"}
                            w="100%"
                            h="60%"
                            // bg="#52607A"
                            // bg="#2d3748"
                            bg="#6379a199"
                            opacity="0"
                            transition="0.35s"
                            // transform="translateY(100%)"
                            _hover={{
                                opacity: "0.92",
                                transform: "translateY(0%)"
                            }}
                            flexDirection="column"
                            justify="center"
                            p="6"
                            color="white"
                        >

                            <Text
                                fontFamily={"SubHeaders"}
                                fontWeight="500"
                                fontSize="xl"
                                mb="2"
                            >
                                {project.title}
                            </Text>

                            <Text
                                fontFamily={"bodytext4"}
                                fontSize="sm"
                                mb="4"
                                lineHeight="1.6"
                            >
                                {project.description}
                            </Text>

                            <Text
                                fontFamily={"bodytext3"}
                                fontWeight="600"
                                fontSize="xs"
                                color="#1E88E5"
                            >
                                {project.tools}
                            </Text>

                        </Flex>
                        </a>

                    </Box>

                ))}
            </Grid>



        </Box>
    )
}

export default Work
