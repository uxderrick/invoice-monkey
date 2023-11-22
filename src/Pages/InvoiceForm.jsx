import React from "react";
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
import { signOutWithGoogle } from "../Firebase";
import { useState } from "react";
import Question1 from "../components/Question1";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import Question4 from "../components/Question4";

const InvoiceForm = () => {
  const [date, setDate] = useState("");

  const handleQuestion2NextClick = () => {
    //TODO: Do something with the information from Question2
    console.log("Date from Question2:", date);
  };

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

      {/*  */}
      <Flex
        className="all-question-container"
        direction="row"
        wrap="wrap"
        justify="between"
        style={{
          width: "100%",
        }}
      >
        <Flex
          className="form-container"
          direction="column"
          gap="6"
          justify="center"
          style={{
            marginTop: "60px",
            maxWidth: "560px",
          }}
          px="3"
        >
          {/* Questions */}
          <Question1></Question1>
          <Question2
            dueDate={date}
            onDateChange={setDate}
            onQuestion2NextClick={handleQuestion2NextClick}
          ></Question2>
          <Question3></Question3>
          <Question4></Question4>
        </Flex>
        {/* //TODO: Add the right side */}
        {/* Right side */}
        <Flex
          className="right-side"
          gap="4"
          style={{
            marginTop: "60px",
            width: "600px",
            height: "600px",
            background: "#262626",
          }}
          px="3"
        ></Flex>
      </Flex>
    </>
  );
};

export default InvoiceForm;
