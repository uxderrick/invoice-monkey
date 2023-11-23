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
import { signOutWithGoogle } from "../Firebase";
import { useState } from "react";
import Question1 from "../components/Question1";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import Question4 from "../components/Question4";
import NavBar from "../components/NavBar";
import Confirmation from "../components/Confirmation";

const InvoiceForm = ({ user }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [note, setNote] = useState("");

  //Question 1 logic
  const updateCustomerInfo = (updatedName, updatedEmail) => {
    setName(updatedName);
    setEmail(updatedEmail);
  };

  const handleQuestion1NextClick = () => {
    //TODO: Do something with the information from Question1
    console.log("Name from Question1:", name);
    console.log("Email from Question1:", email);
  };

  //Question 2 logic
  const handleQuestion2NextClick = () => {
    // TODO: Implement logic for Question 2
    console.log("Date from Question2:", date);
  };

  //Question 3 logic
  const updateItemInfo = (
    updatedItemName,
    updatedItemDescription,
    updatedQuantity,
    updatedCost
  ) => {
    setItemName(updatedItemName);
    setItemDescription(updatedItemDescription);
    setQuantity(updatedQuantity);
    setCost(updatedCost);
  };
  const handleQuestion3NextClick = () => {
    //TODO: Do something with the information from Question3
    console.log("Item name from Question3:", itemName);
    console.log("Item description from Question3:", itemDescription);
    console.log("Quantity from Question3:", quantity);
    console.log("Cost from Question3:", cost);
  };

  //Question 4 logic
  const updateNoteInfo = (updatedNote) => {
    setNote(updatedNote);
  };

  const handleQuestion4NextClick = () => {
    console.log("Note from Question4:", note);
  };

  return (
    <>
      <NavBar user={user}></NavBar>

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
          <Question1
            customerName={name}
            customerEmail={email}
            onQuestion1NextClick={handleQuestion1NextClick}
            updateCustomerInfo={updateCustomerInfo}
          />
          <Question2
            dueDate={date}
            onDateChange={setDate}
            onQuestion2NextClick={handleQuestion2NextClick}
            updateItemInfo={updateItemInfo}
          ></Question2>
          <Question3
            updatedItemName={itemName}
            updatedItemDescription={itemDescription}
            updatedQuantity={quantity}
            updatedCost={cost}
            onQuestion3NextClick={handleQuestion3NextClick}
            updateItemInfo={updateItemInfo}
          ></Question3>
          <Question4
            updatedNote={note}
            onQuestion4NextClick={handleQuestion4NextClick}
            updateNoteInfo={updateNoteInfo}
          ></Question4>
          <Confirmation></Confirmation>
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
