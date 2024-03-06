/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import Calendar from "react-calendar";
import { CalendarIcon } from "@radix-ui/react-icons";

const Question2 = ({
  dueDate,
  onDateChange,
  onQuestion2NextClick,
  onQuestion2BackClick,
}) => {
  const [date, setDate] = useState(new Date());

  function formatDateToDDMMYYYY(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  const handleBackClick = () => {
    //go back to the previous page
    onQuestion2BackClick();
  };
  return (
    <>
      {/* //////////////////////////////////////////////// */}
      {/* Separator */}
      <div
        style={{
          width: "280px",
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
      {/* Question 2 */}
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
          What date is the payment due?
        </Text>
        <TextField.Root>
          <TextField.Input
            disabled
            value={dueDate ? dueDate : formatDateToDDMMYYYY(date)}
            size="4"
            placeholder="DD/MM/YYYY"
            className="question-field"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></TextField.Input>

          <Popover.Root>
            <Popover.Trigger>
              <TextField.Slot>
                <CalendarIcon
                  height="24"
                  width="24"
                  style={{
                    color: "#000000",
                    background: "#DEDEDE",
                    padding: "8px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                />
              </TextField.Slot>
            </Popover.Trigger>
            <Popover.Content align="end" style={{ width: 360 }}>
              <Flex gap="3">
                <Calendar
                  onChange={(value) => {
                    const formattedDate = value
                      .toLocaleDateString("en-US")
                      .split("/")
                      .join("-")
                      .replace(/,/g, "-")
                      .replace(/ /g, "-")
                      .replace(/-/g, "/");
                    onDateChange(formattedDate);
                  }}
                  defaultValue={dueDate}
                  className="calendar"
                  formatLongDate={(locale, date) => formatDateToDDMMYYYY(date)}
                />
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </TextField.Root>

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
            onClick={onQuestion2NextClick}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Question2;
