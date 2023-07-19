import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1pxs"
      >
        <Text fontSize="5xl" color="#ef6161">
          Let's Chat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        borderWidth="1px"
        style={{
          borderRadius: "80px 80px 0 80px",
          padding: "2rem",
          backgroundColor: "#F2F3F2",
        }}
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
