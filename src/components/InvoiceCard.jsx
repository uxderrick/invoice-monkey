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

const InvoiceCard = () => {
  return (
    <Flex
      className="invoice"
      justify="between"
      align="start"
      direction="column"
      gap="4"
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/2a57/33d3/2fdb7accd73fd8f8f053444748a375b0?Expires=1701648000&Signature=dvBr9Y9D4lyv-wqk2jIHkCkUbCQen~tSfqldJYdLDor8DaQ7irrLztvVIJw6tUIvmrzI~yr0jEvZiYffeB3Y-6AuAxJgoskSMH8G1A8hGOu~4iOeItvl7SCqFGHM8Kqmp1yFuXojJZYDQKbdVS0SdYYkYS1bqNa0kixIlBU4MgK8lzc0MKcxhKfFKQ4D-nhd8tTfag94y3rcnkmjZ2mk6EGmzFfvuPJEoTmFt4s4KJ7DHaeM02skQeHMvxPY9aGBGn8ZGmUe90vFhV~YCIFEsSfBWtyyMaSDkYKfrHkYK~cEVsiFF8ekyc7X6AhTP8KFEpXvvYqdghSxjHrZ6kaltQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        height={40}
      ></img>
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
          Invoice 0001
        </Text>
        <Text
          className="invoice-desc"
          align="left"
          style={{
            color: "#b1b1b1",
          }}
          size="3"
        >
          Due 20th Sept
        </Text>
        <Text
          className="invoice-desc"
          align="left"
          style={{
            color: "#b1b1b1",
          }}
          size="3"
        >
          GHS 500.00
        </Text>
      </Flex>
      <Flex direction="row" gap="4">
        <Flex className="invoice-icons" justify="center" align="center">
          <EyeOpenIcon height={20} width={20} color="green" className="icon" />
        </Flex>
        <Flex className="invoice-icons" justify="center" align="center">
          <Pencil2Icon height={20} width={20} color="green" className="icon" />
        </Flex>{" "}
        <Flex className="invoice-icons" justify="center" align="center">
          <TrashIcon height={20} width={20} color="red" className="icon" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InvoiceCard;
