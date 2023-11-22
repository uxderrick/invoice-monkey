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

const Question4 = ({ updateNoteInfo, updatedNote, onQuestion4NextClick }) => {
  const [note, setNote] = React.useState(updatedNote || "");

  const handleNextClick = () => {
    // Call the function passed as a prop to update the state in InvoiceForm
    updateNoteInfo(note);
    // Call the original onQuestion1NextClick function
    onQuestion4NextClick();
  };

  return (
    <>
      {/* //////////////////////////////////////////////// */}
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
