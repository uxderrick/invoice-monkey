/* eslint-disable no-unused-vars */
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
import Invoice from "../assets/invoice.png";

const CreateInvoice = () => {
  return (
    <Flex
      className="create-new"
      justify="center"
      align="center"
      direction="column"
      gap="4"
      onClick={() => {
        window.location.href = "/new";
      }}
    >
      <img src={Invoice} height={56}></img>
      <Text
        align="left"
        style={{
          color: "#fff",
        }}
        size={{
          initial: 4,
          sm: 5,
          md: 5,
          lg: 5,
          xl: 5,
        }}
      >
        Create a new invoice
      </Text>
    </Flex>
  );
};

export default CreateInvoice;
