import React, { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    VStack,
    Grid,
    GridItem,
    Icon,
    Spinner,
    Center,
} from "@chakra-ui/react";

import {
    Lock,
    LogIn,
    Mail,
    User,
    MessageSquare,
    Calendar,
    ShieldAlert,
} from "lucide-react";

import { API_BASE_URL } from "../utils/base-url";

const Admin = () => {
    const [secret, setSecret] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async (adminKey) => {
        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${API_BASE_URL}/api/v1/contacts`, {
                headers: { "x-admin-key": adminKey },
            });

            const json = await res.json();

            if (!res.ok || !json.success) {
                throw new Error(json.message || "Failed to fetch contacts");
            }

            setContacts(json.data || []);
            setIsAuthorized(true);
        } catch (err) {
            setError(err.message || "Authorization failed");
            setIsAuthorized(false);
        } finally {
            setLoading(false);
        }
    };

    const handleAccess = async (e) => {
        e.preventDefault();

        if (!secret.trim()) {
            setError("Please enter admin secret");
            return;
        }

        await fetchContacts(secret.trim());
    };

    /* ---------------- LOGIN SCREEN ---------------- */

    if (!isAuthorized) {
        return (
            <Flex
                minH="100vh"
                align="center"
                justify="center"
                bg="white"
                borderRadius={"md"}
                p="4"
                w="100%" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                mt={{ base: "25px", md: "50px", lg: "60px" }}
            >
                <Box
                    // border="1px solid lime"
                    w="100%"
                    maxW="420px"
                    p="8"
                    bg="white"
                    borderRadius="xl"
                    boxShadow="xl"
                >
                    <Flex align="center" gap="3" mb="6" >
                        <Box bg="gray.100" p="3" borderRadius="lg">
                            <Icon as={Lock} boxSize="6" color="black" />
                        </Box>

                        <Heading
                            fontFamily="headings"
                            fontSize="2xl"
                            color="black"
                        >
                            Admin Access
                        </Heading>
                    </Flex>

                    <form onSubmit={handleAccess}>

                        <Box w="100%" >
                            <Text
                                mb="2"
                                fontFamily="bodytext3"
                                fontSize="sm"
                                color="#58595B"
                            >
                                Admin API Secret
                            </Text>

                            <Input
                                type="password"
                                placeholder="Enter secret"
                                color="#58595B"
                                value={secret}
                                onChange={(e) => setSecret(e.target.value)}
                            />
                        </Box>

                        {error && (
                            <Flex
                                bg="red.100"
                                p="3"
                                borderRadius="md"
                                align="center"
                                gap="2"
                            >
                                <Icon as={ShieldAlert} boxSize="4" />
                                <Text
                                    fontFamily="bodytext4"
                                    fontSize="sm"
                                    color="red.700"
                                >
                                    {error}
                                </Text>
                            </Flex>
                        )}

                        <Button
                            w="100%"
                            mt="10px" borderRadius={"full"}
                            type="submit"
                            bg="grey.200"
                            transition={"0.27s"}
                            shadow="sm"
                            color="@000"
                            _hover={{ bg: "#2963d6", color: "#fff", shadow: "sm" }}
                            isDisabled={loading}
                            leftIcon={
                                loading ? (
                                    <Spinner size="sm" />
                                ) : (
                                    <Icon as={LogIn} />
                                )
                            }
                        >
                            {loading ? "Checking..." : "Access"}
                        </Button>

                    </form>
                </Box>
            </Flex>
        );
    }

    /* ---------------- CONTACT DASHBOARD ---------------- */

    return (
        <Box borderRadius={"md"} boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
            mt={{ base: "25px", md: "35px", lg: "40px" }} minH="100vh" bg="white" p="6">
            <Box maxW="1100px" mx="auto">
                <Heading
                    mb="8"
                    fontFamily="SubHeaders"
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    color="black"
                >
                    Contacts
                </Heading>

                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2,1fr)",
                    }}
                    gap="6"
                >
                    {contacts.map((c) => (
                        <GridItem
                            key={c._id}
                            p="5"
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="lg"
                            bg="white"
                            boxShadow="md"
                        >
                            <Flex justify="space-between">
                                <VStack align="start" spacing="2">
                                    <Flex align="center" gap="2">
                                        {/* <Icon color="#313131" as={User} /> */}
                                        <Text
                                            fontFamily="bodytext4"
                                            color="#58595B"
                                            fontSize={{ base: "1.10rem", md: "1.10rem", lg: "1.22rem" }}
                                        >
                                            {c.name}
                                        </Text>
                                    </Flex>

                                    <Flex align="center" gap="2">
                                        <Icon boxSize={{ base: "16px", md: "18px", lg: "18px" }} color="#083ca2" as={Mail} />
                                        <Text
                                            fontFamily="bodytext4"
                                            fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                                            color="#083ca2"
                                        >
                                            {c.email}
                                        </Text>
                                    </Flex>

                                    <Flex align="center" gap="2">
                                        <Icon boxSize={{ base: "16px", md: "18px", lg: "18px" }} color="#313131" as={MessageSquare} />
                                        <Text
                                            color="#313131"
                                            fontFamily="bodytext4"
                                            fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                                        >
                                            {c.subject}
                                        </Text>
                                    </Flex>
                                </VStack>
                                <Center flexDirection={{ base: "column", md: "row", lg: "row" }} >
                                    <Icon mb="6px" color="#313131" boxSize={{ base: "16px", md: "18px", lg: "18px" }} as={Calendar} mr="1" />
                                    <Text
                                        textAlign={{ base: "center", md: "right", lg: "right" }}
                                        fontSize={{ base: "10px", md: "12px", lg: "12px" }}
                                        fontFamily="bodytext4"
                                        color="#58595B"
                                    >

                                        {new Date(c.createdAt).toLocaleString()}
                                    </Text>
                                </Center>
                            </Flex>

                            <Text
                                mt="4"
                                fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                                color="#2a2b33"
                                fontFamily="bodytext4"
                                lineHeight="1.2"
                                whiteSpace="pre-wrap"
                            >
                                {`" ${c.message} "`}
                            </Text>
                        </GridItem>
                    ))}

                    {contacts.length === 0 && (
                        <Text
                            gridColumn="1/-1"
                            textAlign="center"
                            fontFamily="SubHeaders"
                            color="#2c2c2c"
                        >
                            No contacts found.
                        </Text>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default Admin;