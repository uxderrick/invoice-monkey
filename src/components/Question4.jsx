/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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

const Question4 = ({
  updateNoteInfo,
  updatedNote,
  onQuestion4NextClick,
  onQuestion4BackClick,
}) => {
  const [note, setNote] = React.useState(updatedNote || "");

  const handleNextClick = () => {
    // Call the function passed as a prop to update the state in InvoiceForm
    updateNoteInfo(note);
    // Call the original onQuestion1NextClick function
    onQuestion4NextClick();
  };

  const handleBackClick = () => {
    //go back to the previous page
    onQuestion4BackClick();
  };

  return (
    <>
      {/*////////////////////////////////////////////////*/}
      {/* Separator */}
      <div
        style={{
          width: "560px",
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
          Add a short note to the invoice.
        </Text>
        <TextField.Input
          value={note}
          size="4"
          placeholder="Add a note"
          className="question-field"
          onChange={() => {
            setNote(event.target.value);
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
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Question4;
