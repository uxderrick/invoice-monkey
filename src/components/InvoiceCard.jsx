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
import { EyeOpenIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import File from "../assets/file.png";

const InvoiceCard = () => {
  return (
    <Flex
      className="invoice"
      justify="between"
      align="start"
      direction="column"
      gap="4"
    >
      <img src={File} height={40}></img>
      <Flex direction="column" gap="1">
        <Text
          align="left"
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
          size={{
            initial: 4,
            sm: 5,
            md: 5,
            lg: 5,
            xl: 5,
          }}
        >
          Invoice 0001
        </Text>
        <Text
          className="invoice-desc"
          align="left"
          style={{
            color: "#b1b1b1",
          }}
          size="3"
        >
          Due 20th Sept
        </Text>
        <Text
          className="invoice-desc"
          align="left"
          style={{
            color: "#b1b1b1",
          }}
          size="3"
        >
          GHS 500.00
        </Text>
      </Flex>
      <Flex direction="row" gap="4">
        <Flex className="invoice-icons" justify="center" align="center">
          <EyeOpenIcon height={20} width={20} color="green" className="icon" />
        </Flex>
        <Flex className="invoice-icons" justify="center" align="center">
          <Pencil2Icon height={20} width={20} color="green" className="icon" />
        </Flex>{" "}
        <Flex className="invoice-icons" justify="center" align="center">
          <TrashIcon height={20} width={20} color="red" className="icon" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvoiceCard;
