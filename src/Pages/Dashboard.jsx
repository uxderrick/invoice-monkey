import React from "react";
import { Heading, Text, Flex, Box, Button } from "@radix-ui/themes";
import { signOutWithGoogle } from "../Firebase";

const Dashboard = ({ user }) => {
  return (
    <>
      <Text color="tomato">Signed in</Text>
      <Text
        color="tomato"
        onClick={() => {
          signOutWithGoogle();
        }}
      >
        <a>Sign out</a>
        {user.displayName.split(" ")[0]}
      </Text>
    </>
  );
};

export default Dashboard;
