import React, { useState } from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Avatar,
  Separator,
  Popover,
  TextField,
} from "@radix-ui/themes";

const Question3 = () => {
  return (
    <>
      {/* //////////////////////////////////////////////// */}
      {/* Question 3 */}
      <Flex
        direction="column"
        gap={{
          initial: 3,
          sm: 4,
          md: 4,
          lg: 5,
        }}
      >
        <Text
          className="question"
          size={{
            initial: 8,
            sm: 9,
            md: 9,
            lg: 9,
            xl: 9,
          }}
          weight="medium"
          align="left"
        >
          What item are you creating the invoice for?
        </Text>
        <TextField.Input
          size="4"
          placeholder="Item name"
          className="question-field"
        />
        <TextField.Input
          size="4"
          placeholder="Item quantity"
          className="question-field"
        />
        <TextField.Input
          size="4"
          placeholder="Item cost"
          className="question-field"
        />
        <TextField.Input
          size="4"
          placeholder="Item description"
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
              width: "160px",
            }}
          >
            Back
          </Button>
          <Button
            size="4"
            radius="none"
            style={{
              height: "64px",
              width: "160px",
            }}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Question3;
