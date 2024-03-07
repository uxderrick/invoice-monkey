/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
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
import Confirm from "../assets/confirm.png";

const Confirmation = ({}) => {
  const handleNextClick = () => {
    // Call the function passed as a prop to update the state in InvoiceForm
    //send as email function
    // Call the original onConfirmationNextClick function
    onConfirmationNextClick();
  };

  return (
    <>
      {/* //////////////////////////////////////////////// */}
      {/* Question 5 */}
      <img src={Confirm} height={80} width={80}></img>
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
          Invoice created
        </Text>
        <Text
          className="question"
          size={{
            initial: 4,
            sm: 6,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          weight="regular"
          align="left"
        >
          You can save as PDF or send to the email of your customer
        </Text>

        <Flex
          direction="column"
          gap="4"
          style={{
            width: "100%",
          }}
        >
          <Button
            size="4"
            radius="none"
            style={{
              height: "64px",
            }}
            onClick={handleNextClick}
          >
            Send as email
          </Button>
          <Button
            size="4"
            radius="none"
            variant="outline"
            style={{
              color: "#818181",
              border: "1px solid #818181",
              height: "64px",
            }}
            onClick={() => {
              //TODO: Download as PDF
            }}
          >
            Download as PDF
          </Button>
          <Button
            size="4"
            radius="none"
            variant="ghost"
            style={{
              color: "#818181",
              height: "64px",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Return to dashboard
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Confirmation;
