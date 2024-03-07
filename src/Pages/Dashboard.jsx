/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
import { db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Dashboard = ({ user }) => {
  const [invoices, setInvoices] = useState([]);
  const [totalReceived, setTotalReceived] = useState(0);

  document.body.style.padding = "0 16px 0 16px";

  //store invoice number in local storage
  const currentNumberOfInvoices = invoices.length;
  localStorage.setItem("invoiceNumber", currentNumberOfInvoices);

  //add total received
  useEffect(() => {
    let total = 0;
    invoices.forEach((invoice) => {
      total += parseFloat(invoice.cost);
    });
    setTotalReceived(total);
  }, [invoices]);

  // document.body.style.padding = "0 16px 0 16px";
  //store user name in local storage
  localStorage.setItem("user", user.displayName);

  //retrieve data fom firestore
  useEffect(() => {
    // Retrieve data from firestore
    const getInvoices = async () => {
      const q = query(collection(db, "invoices"));
      const querySnapshot = await getDocs(q);
      const fetchedInvoices = [];
      querySnapshot.forEach((doc) => {
        fetchedInvoices.push(doc.data());
      });
      setInvoices(fetchedInvoices);
      // console.log(fetchedInvoices);
    };

    getInvoices();
  }, []);

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
              GHS {totalReceived.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </Text>
          </Flex>
          {/* <Flex direction="column" align="start" className="card">
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
              GHS {totalPending}
            </Text>
          </Flex> */}
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
              {invoices.length}
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

          {invoices
            .slice()
            .reverse()
            .map((invoice) => {
              return (
                <InvoiceCard
                  invoiceID={invoice.name}
                  date={invoice.date}
                  amount={invoice.cost}
                  itemName={invoice.itemName}
                  itemDescription={invoice.itemDescription}
                  quantity={invoice.quantity}
                  note={invoice.note}
                  name={invoice.name}
                  email={invoice.email}
                  key={Math.random()}
                />
              );
            })}
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
