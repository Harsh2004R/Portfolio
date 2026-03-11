import React, { useState } from "react";
import {
    Box,
    Center,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    Flex,
    Icon,
    Link,
    Stack,
} from "@chakra-ui/react";

import { Toaster, toaster } from "../components/ui/toaster.jsx";

import { motion } from "framer-motion";

import {
    Mail,
    Phone,
    MapPin,
    Send,
    Copy,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const MotionBox = motion(Box);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            toaster.create({
                title: "Message Sent!",
                description: "Thanks for reaching out.",
                type: "success",
            });

            setLoading(false);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 1200);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("harshsharmaktm03@gmail.com");

            toaster.create({
                title: "Email Copied",
                description: "Email copied to clipboard.",
                type: "success",
                duration: 2000,
            });
        } catch (error) {
            toaster.create({
                title: "Copy Failed",
                description: "Unable to copy email.",
                type: "error",
            });
        }
    };

    return (
        <Box bg="white" py={{ base: "70px", md: "100px", lg: "120px" }}>
            <Toaster />

            <Container
                maxW="1200px"
                px={{ base: "20px", md: "30px", lg: "40px" }}
            >
                {/* Heading */}

                <MotionBox
                    textAlign="center"
                    mb={{ base: "50px", md: "70px", lg: "80px" }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Heading
                        fontFamily="bodytext3"
                        fontSize={{ base: "28px", md: "38px", lg: "48px" }}
                        color="#58595B"
                    >
                        Get In Touch
                    </Heading>

                    <Text
                        fontFamily="bodytext4"
                        fontSize={{ base: "15px", md: "17px", lg: "18px" }}
                        mt="4"
                        textAlign={{ base: "justify", md: "center", lg: "center" }}
                        color="#6c6d70"
                        maxW="600px"
                        mx="auto"
                    >
                        Ready to build something amazing together? Let's discuss your
                        project and bring your ideas to life.
                    </Text>
                </MotionBox>

                {/* Grid Layout */}

                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "1fr",
                        lg: "1fr 1.2fr",
                    }}
                    gap={{ base: "40px", md: "50px", lg: "60px" }}
                    alignItems="start"
                >
                    {/* Contact Info */}

                    <GridItem>
                        <Stack spacing={{ base: "20px", md: "25px", lg: "30px" }}>
                            <Heading
                                fontFamily="bodytext3"
                                fontSize={{ base: "22px", md: "26px", lg: "28px" }}
                                color="#58595B"
                            >
                                Let's Connect
                            </Heading>

                            <Text
                                fontFamily="bodytext4"
                                color="#6c6d70"
                                lineHeight="1.8"
                                fontSize={{ base: "15px", md: "16px" }}
                            >
                                I'm always open to discussing new projects, creative ideas or
                                opportunities to collaborate.
                            </Text>

                            {/* Email */}

                            <Flex
                                align="center"
                                gap="16px"
                                p={{ base: "14px", md: "16px" }}
                                borderRadius="12px"
                                bg="#F7F7F7"
                                w="100%"
                                transition="0.3s"
                                _hover={{ transform: "translateY(-3px)" }}
                            >
                                <Icon as={Mail} boxSize="20px" color="#58595B" />

                                <Box flex="1">
                                    <Text fontSize="sm" color="#7a7b7e">
                                        Email
                                    </Text>

                                    <Text
                                        fontFamily="bodytext4"
                                        color="#58595B"
                                        fontSize={{ base: "14px", md: "15px" }}
                                        wordBreak="break-all"
                                    >
                                        harshsharmaktm03@gmail.com
                                    </Text>
                                </Box>

                                <Button
                                    size="sm"
                                    onClick={copyEmail}
                                    minW="36px"
                                    h="36px"
                                >
                                    <Icon as={Copy} />
                                </Button>
                            </Flex>

                            {/* Phone */}

                            <Flex
                                align="center"
                                gap="16px"
                                p={{ base: "14px", md: "16px" }}
                                borderRadius="12px"
                                bg="#F7F7F7"
                                w="100%"
                                transition="0.3s"
                                _hover={{ transform: "translateY(-3px)" }}
                            >
                                <Icon as={Phone} boxSize="20px" color="#58595B" />

                                <Box>
                                    <Text fontSize="sm" color="#7a7b7e">
                                        Phone
                                    </Text>

                                    <Text
                                        fontFamily="bodytext4"
                                        color="#58595B"
                                        fontSize={{ base: "14px", md: "15px" }}
                                    >
                                        +91 7454982623
                                    </Text>
                                </Box>
                            </Flex>

                            {/* Location */}

                            <Flex
                                align="center"
                                gap="16px"
                                p={{ base: "14px", md: "16px" }}
                                borderRadius="12px"
                                bg="#F7F7F7"
                                w="100%"
                                transition="0.3s"
                                _hover={{ transform: "translateY(-3px)" }}
                            >
                                <Icon as={MapPin} boxSize="20px" color="#58595B" />

                                <Box>
                                    <Text fontSize="sm" color="#7a7b7e">
                                        Location
                                    </Text>

                                    <Text
                                        fontFamily="bodytext4"
                                        color="#58595B"
                                        fontSize={{ base: "14px", md: "15px" }}
                                    >
                                        Uttarakhand, India
                                    </Text>
                                </Box>
                            </Flex>

                            {/* Social Icons */}

                            <Center w={{ base: "80%", md: "50%", lg: "50%" }} p="4" m="auto" justifyContent={"space-evenly"} >

                                <Link
                                    href="https://github.com/harsh2004r"
                                    isExternal
                                >
                                    <Icon
                                        as={Github}
                                        boxSize="26px"
                                        color="#58595B"
                                        _hover={{ color: "black" }}
                                    />
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/in/harsh-sharma-0545aa25b/"
                                    isExternal
                                >
                                    <Icon
                                        as={Linkedin}
                                        boxSize="26px"
                                        color="#58595B"
                                        _hover={{ color: "#0A66C2" }}
                                    />
                                </Link>

                                <Link
                                    href="https://twitter.com/Harsh2004R"
                                    isExternal
                                >
                                    <Icon
                                        as={Twitter}
                                        boxSize="26px"
                                        color="#58595B"
                                        _hover={{ color: "#1DA1F2" }}
                                    />
                                </Link>

                            </Center>
                        </Stack>
                    </GridItem>

                    {/* Contact Form */}

                    <GridItem>
                        <MotionBox
                            // border="1px solid red"
                            p={{ base: "15px", md: "30px", lg: "40px" }}
                            borderRadius="18px"
                            bg="#FAFAFA"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Heading
                                fontFamily="bodytext3"
                                fontSize={{ base: "22px", md: "24px", lg: "26px" }}
                                color="#58595B"
                                mb="30px"
                            >
                                Send a Message
                            </Heading>

                            <form onSubmit={handleSubmit}>
                                <Stack spacing="18px">
                                    <Input
                                        h={{ base: "44px", md: "48px" }}
                                        border="1px solid"
                                        borderColor="gray.200"
                                        _focus={{
                                            borderColor: "#58595B",
                                            boxShadow: "none",
                                        }}
                                        placeholder="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        fontFamily="bodytext4"
                                    />

                                    <Input
                                        h={{ base: "44px", md: "48px" }}
                                        border="1px solid"
                                        borderColor="gray.200"
                                        _focus={{
                                            borderColor: "#58595B",
                                            boxShadow: "none",
                                        }}
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        fontFamily="bodytext4"
                                    />

                                    <Input
                                        h={{ base: "44px", md: "48px" }}
                                        border="1px solid"
                                        borderColor="gray.200"
                                        _focus={{
                                            borderColor: "#58595B",
                                            boxShadow: "none",
                                        }}
                                        placeholder="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        fontFamily="bodytext4"
                                    />

                                    <Textarea
                                        rows={6}
                                        placeholder="Write your message..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        fontFamily="bodytext4"
                                        resize="none"
                                    />

                                    <Button
                                        type="submit"
                                        w="100%"
                                        bg="#58595B"
                                        color="white"
                                        size={{ base: "md", md: "lg" }}
                                        rightIcon={<Send size={18} />}
                                        _hover={{ bg: "#3e3f42" }}
                                        isLoading={loading}
                                    >
                                        Send Message
                                    </Button>
                                </Stack>
                            </form>
                        </MotionBox>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;