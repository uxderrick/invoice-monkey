import React from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Avatar,
  Separator,
  TextField,
} from "@radix-ui/themes";
import { signOutWithGoogle } from "../Firebase";

const InvoiceForm = () => {
  document.body.style.padding = "0 16px 0 16px";

  return (
    <>
      <Flex direction="row" align="center" justify="between" width="100%">
        <img
          src="https://raw.githubusercontent.com/uxderrick/invoice-monkey/3c1bdf204fcc2740c251c4908b75687fa9a0ea5a/src/assets/logo.svg"
          //
          onClick={() => {
            window.location.href = "/";
          }}
        ></img>
        <Flex gap="5" align="center">
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
      <Flex
        direction="row"
        gap="6"
        justify="center"
        style={{
          marginTop: "60px",
          //   maxWidth: "600px",
        }}
      >
        <Flex
          direction="column"
          gap={{
            initial: 4,
            sm: 4,
            md: 4,
            lg: 6,
          }}
        >
          <Text
            className="question"
            size={{
              initial: 8,
              sm: 8,
              md: 9,
              lg: 9,
              xl: 9,
            }}
            weight="medium"
            align="left"
          >
            Who are you issuing this invoice to?
          </Text>
          <TextField.Input
            radius="large"
            size="4"
            placeholder="Customer name"
            className="question-field"
          />
          <TextField.Input
            radius="large"
            size="4"
            placeholder="Customer name"
            className="question-field"
          />
          <Flex
            gap="4"
            style={{
              width: "100%",
            }}
          >
            <Button
              size="4"
              radius="none"
              variant="outline"
              style={{
                color: "#818181",
                border: "1px solid #818181",
                height: "64px",
              }}
            >
              Back
            </Button>
            <Button
              size="4"
              radius="none"
              style={{
                height: "64px",
                // minWidth: "240px",
              }}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default InvoiceForm;
