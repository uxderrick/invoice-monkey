/* eslint-disable no-unused-vars */
import { Heading, Text, Flex, Box, Button } from "@radix-ui/themes";
import React from "react";
import { signInWithGoogle, useAuth } from "../Firebase";
import Logo from "../assets/logo.svg";

const LandingPage = () => {
  //
  return (
    <>
      <Box className="big-box landing-center-guy">
        <Box
          py="1"
          style={{
            backgroundColor: "var(--zinc-900, #1B1B1B)",
            color: "white",
          }}
        >
          <Flex direction="column" gap="5" align={"center"}>
            {/* logo */}
            <img className="container" src={Logo} height={120}></img>

            {/* Title block */}
            <Flex
              direction="column"
              gap="2"
              align={"center"}
              style={{
                maxWidth: "720px",
              }}
            >
              <Heading
                align={"center"}
                size={{
                  initial: "9",
                  md: "9",
                  sm: "9",
                  xl: "9",
                }}
                style={{
                  lineHeight: "4.5rem",
                }}
              >
                Create, print, and email an invoice in
                <Text
                  style={{
                    color: "var(--colors-green-9, #30A46C",
                    lineHeight: "4.5rem",
                  }}
                >
                  <> </>3 minutes
                </Text>
              </Heading>
              <Text
                size={{
                  initial: "6",
                  md: "6",
                  sm: "8",
                  xl: "8",
                }}
                align="center"
                style={{
                  color: "var(--grays-gray-10, #818181)",
                }}
              >
                Move your business to the next level with Invoice Monkey
              </Text>
              <Button
                variant="solid"
                size="4"
                style={{
                  marginTop: "1rem",
                }}
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex>
          <img
            className="container"
            src="https://images.unsplash.com/photo-1632401602944-dfb6de917f07?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // height={120}

            style={{
              marginTop: "3rem",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "1rem",
              border: "1px solid var(--zinc-900, #2C2C2C)",
            }}
          ></img>
        </Flex>
      </Box>
      {/* <Flex justify="center">
        <Text
          size="3"
          align="center"
          style={{
            color: "var(--grays-gray-10, #ffffff)",
            marginTop: "2rem",
          }}
        >
          <a href="">Contribute on GitHub</a>
        </Text>
      </Flex> */}
    </>
  );
};

export default LandingPage;
