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
} from "@radix-ui/themes";
import { EyeOpenIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import File from "../assets/file.png";
import * as Dialog from "@radix-ui/react-dialog";
import InvoicePreview from "./InvoicePreview";

const InvoiceCard = ({
  invoiceID,
  date,
  amount,
  itemName,
  itemDescription,
  quantity,
  note,
  name,
  email,
}) => {
  return (
    <Flex
      className="invoice"
      justify="between"
      align="start"
      direction="column"
      gap="4"
    >
      <img src={File} height={40}></img>
      <Flex direction="column" gap="1">
        <Text
          align="left"
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
          size={{
            initial: 4,
            sm: 5,
            md: 5,
            lg: 5,
            xl: 5,
          }}
        >
          {invoiceID ? invoiceID : null}
        </Text>
        <Text
          className="invoice-desc"
          align="left"
          style={{
            color: "#b1b1b1",
          }}
          size="3"
        >
          {date ? date : null}
        </Text>
        <Text
          className="invoice-desc"
          align="left"
          style={{
            color: "#b1b1b1",
          }}
          size="3"
        >
          GHS {amount ? amount : null}
        </Text>
      </Flex>

      {/* <Flex className="invoice-icons" justify="center" align="center">
        <EyeOpenIcon
          height={20}
          width={20}
          color="green"
          className="icon"
          onClick={() => {
            console.log("View invoice");
          }}
        />
      </Flex> */}

      <Flex direction="row" gap="4">
        <Dialog.Root modal={"true"}>
          <Dialog.Trigger
            style={{
              border: "none",
              background: "none",
              padding: "0",
            }}
          >
            <Flex className="invoice-icons" justify="center" align="center">
              <EyeOpenIcon
                height={20}
                width={20}
                color="green"
                className="icon"
                onClick={() => {
                  console.log("View invoice");
                }}
              />
            </Flex>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content
              align={"center"}
              className="DialogContent"
              style={{
                // minWidth: "40vw",
                // maxWidth: "90vw",
                padding: "12px",
              }}
            >
              <InvoicePreview
                name={name}
                email={email}
                date={date}
                itemName={itemName}
                itemDescription={itemDescription}
                quantity={quantity}
                cost={amount}
                note={note}
              />
              <Flex gap="3" mt="4" justify="end"></Flex>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <Flex className="invoice-icons" justify="center" align="center">
          <TrashIcon height={20} width={20} color="red" className="icon" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvoiceCard;
