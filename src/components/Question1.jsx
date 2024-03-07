import React from "react";
import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Avatar,
  Separator,
  Dialog,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";

const Question1 = ({
  updatedName,
  updatedEmail,
  updateCustomerInfo,
  onQuestion1NextClick,
}) => {
  const [name, setName] = useState(updatedName || "");
  const [email, setEmail] = useState(updatedEmail || "");

  const handleNextClick = () => {
    // Call the function passed as a prop to update the state in InvoiceForm
    updateCustomerInfo(name, email);
    // Call the original onQuestion1NextClick function
    onQuestion1NextClick();
  };

  const handleBackClick = () => {
    //go back to the previous page
    window.history.back();
  };

  return (
    <>
      {/* //////////////////////////////////////////////// */}
      {/* Separator */}
      <div
        style={{
          width: "140px",
          height: "2px",
          backgroundColor: "#299764",
          marginTop: "24px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "2px",
            maxWidth: "560px",
            backgroundColor: "#757575",
            position: "absolute",
            zIndex: "-1",
          }}
        ></div>
      </div>
      {/* Question 1 */}
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
          Who are you issuing this invoice to?
        </Text>
        <TextField.Input
          value={name}
          size="4"
          placeholder="Customer name"
          className="question-field"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <TextField.Input
          value={email}
          size="4"
          placeholder="Customer email"
          className="question-field"
          onChange={(event) => {
            setEmail(event.target.value);
            // console.log(event.target.value);
          }}
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
            onClick={handleBackClick}
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
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Question1;
