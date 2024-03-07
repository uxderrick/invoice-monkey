/* eslint-disable no-unused-vars */
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

//get current date
const today = new Date();
const date = `${today.getDate()}/${
  today.getMonth() + 1
}/${today.getFullYear()}`;

const userName = localStorage.getItem("user");

const InvoicePreview = ({
  name,
  email,
  date,
  itemName,
  itemDescription,
  quantity,
  cost,
  note,
}) => {
  return (
    <>
      <Flex
        className="right-side"
        direction={"column"}
        style={{
          marginTop: "60px",
          width: "600px",
          height: "600px",
          background: "#ffffff",
          borderRadius: "8px ",
        }}
        px="5"
        py="5"
      >
        <div
          className="top-bar"
          style={{
            width: "100%",
            height: "40px",
            background: "#00B857",
            borderRadius: "2px",
            marginBottom: "8px",
          }}
        ></div>
        <Flex direction="row" align="center" justify="between">
          <img src="https://raw.githubusercontent.com/uxderrick/invoice-monkey/3c1bdf204fcc2740c251c4908b75687fa9a0ea5a/src/assets/logo.svg"></img>
          <Text
            color="#00B857"
            style={{
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Invoice 0001
          </Text>
        </Flex>
        <Separator
          orientation="horizontal"
          size="4"
          style={{
            background: "#F1F1F1",
            width: "100%",
            // marginTop: "8px",
            marginBottom: "8px",
          }}
        />

        {/* Main */}
        <Flex
          direction="row"
          align="center"
          justify="between"
          style={{
            marginTop: "16px",
          }}
        >
          <Flex direction="column" gap={"2"}>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">FROM</Text>
              <Text className="value">
                {userName ? userName : "Enter your name"}
              </Text>
            </Flex>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">TO</Text>
              <Text className="value">
                {name ? name : "Enter client's name"}{" "}
                {email ? `(${email})` : "(client@gmail.com)"}
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap={"2"} align={"end"}>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">SENT ON</Text>
              <Text className="value">
                {today.getDate() +
                  "/" +
                  (today.getMonth() + 1) +
                  "/" +
                  today.getFullYear()}
              </Text>
            </Flex>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">DUE ON</Text>
              <Text className="value">
                {date
                  ? date
                  : today.getDate() +
                    "/" +
                    today.getMonth() +
                    "/" +
                    today.getFullYear()}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Separator
          orientation="horizontal"
          size="4"
          style={{
            background: "#F1F1F1",
            width: "100%",
            marginTop: "16px",
            marginBottom: "8px",
          }}
        />
        <Flex direction={"column"} justify={"between"} className="main">
          <Flex
            direction="row"
            align="center"
            justify="between"
            style={{
              marginTop: "16px",
              width: "100%",
            }}
          >
            <Flex
              direction="row"
              style={{
                width: "100%",
              }}
            >
              <Flex
                direction={"column"}
                gap={"2"}
                align={"start"}
                width={"100%"}
              >
                <Text className="label">ITEM</Text>
                <Text className="value" align={"left"}>
                  {itemName ? itemName : "Enter item name"}
                </Text>
                <Text className="description" align={"left"}>
                  {itemDescription ? itemDescription : "Enter item description"}
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"2"} align={"end"}>
                <Text className="label">QTY</Text>
                <Text className="s-total">
                  {quantity
                    ? quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Enter quantity"}
                </Text>
              </Flex>
              <Flex
                direction={"column"}
                gap={"2"}
                align={"end"}
                style={{
                  width: "200px",
                }}
              >
                <Text className="label">COST (GHS)</Text>
                <Text className="value">
                  {cost
                    ? cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "Enter cost"}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            direction={"column"}
            align={"start"}
            gap={"1"}
            py={"3"}
            px={"3"}
            style={{
              borderRadius: "8px",
              background: "#F1F1F1",
            }}
          >
            <Text className="label">NOTE</Text>
            <Text size={"2"}>
              {note ? note : "Enter any additional information here"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default InvoicePreview;
