import React from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Avatar,
  Separator,
} from "@radix-ui/themes";
import { signOutWithGoogle } from "../Firebase";

const Dashboard = ({ user }) => {
  document.body.style.padding = "0 8px 0 8px";

  return (
    <>
      {/* <Text color="tomato">Signed in</Text>
      <Text
        color="tomato"
        onClick={() => {
          signOutWithGoogle();
        }}
      >
        <a>Sign out</a>
        {user.displayName.split(" ")[0]}
      </Text> */}
      <Flex direction="row" align="center" justify="between">
        <img
          src="https://raw.githubusercontent.com/uxderrick/invoice-monkey/3c1bdf204fcc2740c251c4908b75687fa9a0ea5a/src/assets/logo.svg"
          // height={160}
          //
        ></img>
        <Flex gap="5" align="center">
          <Avatar radius="full" src={user.photoURL} size="2"></Avatar>
          <Button
            onClick={() => {
              signOutWithGoogle();
            }}
          >
            Sign out
          </Button>
        </Flex>
      </Flex>
      <Separator
        orientation="horizontal"
        size="4"
        style={{
          background: "#262626",
          width: "100%",
          marginTop: "8px",
          marginBottom: "8px",
        }}
      />
      <Flex direction="column" align="start" gap="4" px="6" py="9">
        <Text className="heading">Hi {user.displayName.split(" ")[0]}</Text>
        <Separator
          orientation="horizontal"
          size="4"
          style={{
            background: "#262626",
            width: "100%",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        />
        <Flex
          direction="row"
          wrap="wrap"
          gap={{
            initial: 3,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
          }}
          style={{
            width: "100%",
          }}
        >
          <Flex direction="column" align="start" className="card">
            <Text className="card-title" align="left">
              Total Received
            </Text>
            <Text
              className="card-value"
              align="left"
              size={{
                initial: 5,
                sm: 6,
                md: 7,
                lg: 8,
                xl: 8,
              }}
            >
              GHS 67,000.00
            </Text>
          </Flex>
          <Flex direction="column" align="start" className="card">
            <Text className="card-title" align="left">
              Total Received
            </Text>
            <Text
              className="card-value"
              align="left"
              size={{
                initial: 5,
                sm: 6,
                md: 7,
                lg: 8,
                xl: 8,
              }}
            >
              GHS 67,000.00
            </Text>
          </Flex>
          <Flex direction="column" align="start" className="card">
            <Text className="card-title" align="left">
              Total Received
            </Text>
            <Text
              className="card-value"
              align="left"
              size={{
                initial: 5,
                sm: 6,
                md: 7,
                lg: 8,
                xl: 8,
              }}
            >
              GHS 67,000.00
            </Text>
          </Flex>
        </Flex>
        <Separator
          orientation="horizontal"
          size="4"
          style={{
            background: "#262626",
            width: "100%",
            marginTop: "8px",
            marginBottom: "16px",
          }}
        />
        <Flex wrap="wrap" direction="row" gap="4"></Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
