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
import { signOutWithGoogle } from "../Firebase";
import CreateInvoice from "../components/CreateInvoice";
import InvoiceCard from "../components/InvoiceCard";
import NavBar from "../components/NavBar";

const Dashboard = ({ user }) => {
  document.body.style.padding = "0 16px 0 16px";

  return (
    <>
      <NavBar user={user}></NavBar>
      <Flex
        direction="column"
        align="start"
        gap="4"
        px="2"
        py={{
          initial: 3,
          sm: 4,
          md: 4,
          lg: 7,
          xl: 7,
        }}
      >
        <Text
          className="heading"
          size={{
            initial: 6,
            sm: 6,
            md: 8,
            lg: 8,
            xl: 8,
          }}
        >
          Hi {user.displayName.split(" ")[0]}
        </Text>
        <Separator
          orientation="horizontal"
          style={{
            background: "#262626",
            width: "100%",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        />
        <Flex
          direction="row"
          wrap="wrap"
          gap={{
            initial: 3,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
          }}
          style={{
            width: "100%",
          }}
        >
          <Flex direction="column" align="start" className="card">
            <Text className="card-title" align="left">
              Total Received
            </Text>
            <Text
              className="card-value"
              align="left"
              size={{
                initial: 5,
                sm: 6,
                md: 7,
                lg: 8,
                xl: 8,
              }}
            >
              GHS 67,000.00
            </Text>
          </Flex>
          <Flex direction="column" align="start" className="card">
            <Text className="card-title" align="left">
              Total Pending
            </Text>
            <Text
              className="card-value"
              align="left"
              size={{
                initial: 5,
                sm: 6,
                md: 7,
                lg: 8,
                xl: 8,
              }}
            >
              GHS 67,000.00
            </Text>
          </Flex>
          <Flex direction="column" align="start" className="card">
            <Text className="card-title" align="left">
              Number of customers
            </Text>
            <Text
              className="card-value"
              align="left"
              size={{
                initial: 5,
                sm: 6,
                md: 7,
                lg: 8,
                xl: 8,
              }}
            >
              5
            </Text>
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
        <Flex wrap="wrap" direction="row" gap="5">
          <CreateInvoice />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
          <InvoiceCard />
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
