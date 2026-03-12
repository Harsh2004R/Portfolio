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
    Clipboard, IconButton
} from "@chakra-ui/react";

import { Toaster, toaster } from "../components/ui/toaster.jsx";
import { API_BASE_URL } from "../utils/base-url/index.js"
import { motion } from "framer-motion";

import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const MotionBox = motion(Box);

const Contact = ({load,data}) => {
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

    const validateForm = () => {
        const { name, email, subject, message } = formData;

        if (!name.trim()) {
            toaster.create({
                title: "Name Required",
                description: "Please enter your name.",
                type: "warning",
            });
            return false;
        }

        if (!email.trim()) {
            toaster.create({
                title: "Email Required",
                description: "Please enter your email.",
                type: "warning",
            });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            toaster.create({
                title: "Invalid Email",
                description: "Please enter a valid email address.",
                type: "error",
            });
            return false;
        }

        if (!subject.trim()) {
            toaster.create({
                title: "Subject Required",
                description: "Please enter the subject.",
                type: "warning",
            });
            return false;
        }

        if (!message.trim()) {
            toaster.create({
                title: "Message Required",
                description: "Please write your message.",
                type: "warning",
            });
            return false;
        }

        if (message.trim().length < 10) {
            toaster.create({
                title: "Message Too Short",
                description: "Message should contain at least 10 characters.",
                type: "warning",
            });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;
        setLoading(true);
        try {

            const res = await fetch(`${API_BASE_URL}/api/v1/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const json = await res.json();
            console.log(json)
            if (!res.ok || !json.success) {
                toaster.create({
                    title: "Request Not sent !",
                    description: "Server Error in sending request...",
                    type: "error",
                });

                setLoading(false);

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                // throw new Error(json.message || "Failed to send");
            } else {
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
                setFormData({ name: "", email: "", subject: "", message: "" });
            }

        } catch (error) {
            console.log("Error from catch block:", "eror:", error)
        } finally {
            setLoading(false);
        }

    };

    function copyEmail() {
        toaster.create({
            title: "Email Copied",
            description: "harshsharmaktm03@gmail.com",
            type: "success",
            duration: 2000,
        });
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


                                <Clipboard.Root value="harshsharmaktm03@gmail.com">
                                    <Clipboard.Trigger asChild>
                                        <IconButton
                                            onClick={copyEmail}
                                            variant="outline"
                                            size="xs"
                                            color="black"
                                            borderColor="black"
                                            _hover={{ bg: "black", color: "white" }}
                                        >
                                            <Clipboard.Indicator />
                                        </IconButton>
                                    </Clipboard.Trigger>
                                </Clipboard.Root>
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
                            bg="#F7F7F7"
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
                                        color="#e45447"
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
                                        color="#e45447"
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
                                        color="#58595B"
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
                                        color="#e45447"
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
                                        loading={loading}
                                        loadingText="Sending Request..."
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