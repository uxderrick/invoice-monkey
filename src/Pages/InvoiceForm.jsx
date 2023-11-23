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
  const [goToQuestion2, setGoToQuestion2] = useState(false);
  const [goToQuestion3, setGoToQuestion3] = useState(false);
  const [goToQuestion4, setGoToQuestion4] = useState(false);
  const [goToConfirmation, setGoToConfirmation] = useState(false);

  //Question 1 logic
  const updateCustomerInfo = (updatedName, updatedEmail) => {
    setName(updatedName);
    setEmail(updatedEmail);
  };

  const handleQuestion1NextClick = () => {
    //TODO: Do something with the information from Question1
    console.log("Name from Question1:", name);
    console.log("Email from Question1:", email);
    setGoToQuestion2(true);
  };

  //Question 2 logic
  const handleQuestion2NextClick = () => {
    // TODO: Implement logic for Question 2
    console.log("Date from Question2:", date);
    setGoToQuestion3(true);
    setGoToQuestion2(false);
  };

  const handleQuestion2BackClick = () => {
    //go back to the previous question
    setGoToQuestion2(false);
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
    setGoToQuestion4(true);
    setGoToQuestion3(false);
  };

  const handleQuestion3BackClick = () => {
    //go back to the previous question
    setGoToQuestion3(false);
    setGoToQuestion2(true);
  };

  //Question 4 logic
  const updateNoteInfo = (updatedNote) => {
    setNote(updatedNote);
  };

  const handleQuestion4NextClick = () => {
    console.log("Note from Question4:", note);
    setGoToConfirmation(true);
    setGoToQuestion4(false);
  };

  const handleQuestion4BackClick = () => {
    //go back to the previous question
    setGoToQuestion4(false);
    setGoToQuestion3(true);
  };

  //step logic
  const renderCurrentStep = () => {
    if (goToQuestion2) {
      return (
        <Question2
          dueDate={date}
          onDateChange={setDate}
          onQuestion2NextClick={handleQuestion2NextClick}
          updateItemInfo={updateItemInfo}
          onQuestion2BackClick={handleQuestion2BackClick}
        ></Question2>
      );
    } else if (goToQuestion3) {
      return (
        <Question3
          updatedItemName={itemName}
          updatedItemDescription={itemDescription}
          updatedQuantity={quantity}
          updatedCost={cost}
          onQuestion3NextClick={handleQuestion3NextClick}
          updateItemInfo={updateItemInfo}
          onQuestion3BackClick={handleQuestion3BackClick}
        ></Question3>
      );
    } else if (goToQuestion4) {
      return (
        <Question4
          updatedNote={note}
          onQuestion4NextClick={handleQuestion4NextClick}
          updateNoteInfo={updateNoteInfo}
          onQuestion4BackClick={handleQuestion4BackClick}
        ></Question4>
      );
    } else if (goToConfirmation) {
      return <Confirmation></Confirmation>;
    } else {
      return (
        <Question1
          customerName={name}
          customerEmail={email}
          onQuestion1NextClick={handleQuestion1NextClick}
          updateCustomerInfo={updateCustomerInfo}
        ></Question1>
      );
    }
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
          // justify="center"
          style={{
            marginTop: "60px",
            maxWidth: "560px",
          }}
          px="3"
        >
          {renderCurrentStep()}
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
