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

const InvoicePreview = () => {
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
              <Text className="value">Derrick Tsorme</Text>
            </Flex>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">TO</Text>
              <Text className="value">Kofi Asamoah (kas@gmail.com)</Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap={"2"} align={"end"}>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">SENT ON</Text>
              <Text className="value">20th September, 2023</Text>
            </Flex>
            <Flex direction={"row"} gap={"2"} align={"center"}>
              <Text className="label">DUE ON</Text>
              <Text className="value">20th September, 2023</Text>
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
                  MacBook 13”
                </Text>
                <Text className="description" align={"left"}>
                  Part Payment for the item we bought
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"2"} align={"start"}>
                <Text className="label">QTY</Text>
                <Text className="value">1</Text>
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
                <Text className="s-total">67,000.00</Text>
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
            <Text size={"2"}>Before implementing any of these methods</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default InvoicePreview;
