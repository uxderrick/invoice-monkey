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

const NavBar = ({ user }) => {
  return (
    <>
      <Flex direction="row" align="center" justify="between">
        <img
          src="https://raw.githubusercontent.com/uxderrick/invoice-monkey/3c1bdf204fcc2740c251c4908b75687fa9a0ea5a/src/assets/logo.svg"
          onClick={() => {
            window.location.href = "/";
          }}
          //
        ></img>
        <Flex gap="5" align="center">
          <Avatar radius="full" src={user?.photoURL} size="2"></Avatar>
          <Button
            variant="outline"
            onClick={() => {
              signOutWithGoogle();
              window.location.href = "/";
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
    </>
  );
};

export default NavBar;
