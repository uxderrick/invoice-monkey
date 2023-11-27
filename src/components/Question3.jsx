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
  TextFieldSlot,
  TextFieldRoot,
} from "@radix-ui/themes";

const Question3 = ({
  onQuestion3BackClick,
  onQuestion3NextClick,
  updateItemInfo,
  updatedItemName,
  updatedItemDescription,
  updatedQuantity,
  updatedCost,
}) => {
  const [quantity, setQuantity] = useState(updatedQuantity || 1);
  const [cost, setCost] = useState(updatedCost || 0);
  const [itemName, setItemName] = useState(updatedItemName || "");
  const [itemDescription, setItemDescription] = useState(
    updatedItemDescription || ""
  );

  const handleNextClick = () => {
    // Call the function passed as a prop to update the state in InvoiceForm
    updateItemInfo(itemName, itemDescription, quantity, cost);
    // Call the original onQuestion1NextClick function
    onQuestion3NextClick();
  };

  const handleBackClick = () => {
    //go back to the previous page
    onQuestion3BackClick();
  };

  return (
    <>
      {/* //////////////////////////////////////////////// */}
      {/* Separator */}
      <div
        style={{
          width: "420px",
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
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />

        <TextFieldRoot>
          <TextField.Slot>
            <Text
              size={{
                initial: 4,
                sm: 5,
                md: 5,
                lg: 5,
                xl: 5,
              }}
              style={{
                marginLeft: "10px",
                color: "#818181",
                width: "100%",
              }}
            >
              Item Quantity
            </Text>
          </TextField.Slot>
          <TextField.Input
            size="4"
            placeholder="Item quantity"
            className="question-field"
            value={quantity}
            onInput={(e) => {
              setQuantity(e.target.value.replace(/[^0-9]/g, ""));
            }}
          />
        </TextFieldRoot>

        <TextFieldRoot>
          <TextField.Slot>
            <Text
              size={{
                initial: 4,
                sm: 5,
                md: 5,
                lg: 5,
                xl: 5,
              }}
              style={{
                marginLeft: "10px",
                color: "#818181",
              }}
            >
              Item Cost
            </Text>
          </TextField.Slot>
          <TextField.Input
            size="4"
            placeholder="Item cost"
            className="question-field"
            value={cost}
            onInput={(e) => {
              setCost(e.target.value.replace(/[^0-9]/g, ""));
            }}
          />
        </TextFieldRoot>
        <TextField.Input
          value={itemDescription}
          size="4"
          placeholder="Item description"
          className="question-field"
          onChange={(e) => {
            setItemDescription(e.target.value);
            // console.log(itemDescription);
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

export default Question3;
