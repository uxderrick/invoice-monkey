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

const Confirmation = ({}) => {
  const handleNextClick = () => {
    // Call the function passed as a prop to update the state in InvoiceForm

    // Call the original onConfirmationNextClick function
    onConfirmationNextClick();
  };

  return (
    <>
      {/* //////////////////////////////////////////////// */}
      {/* Question 5 */}
      <img
        src="https://s3-alpha-sig.figma.com/img/2dd1/3068/39b34bcafd060686d1a1aa4b1e673653?Expires=1701648000&Signature=p7yi-2BdKJs4Lgig2mfExCmoJo-qkXkfz0Bjr5L0uykGnH8RGbpvCtXoQxiyf7jzGq7ptssfiKsQMNWHX0j8khk-fqsjmMMSaCE33-3rLmm1IussOz9d54kCVrRu7dHMJz9EZ8cG~s-RkvhVOs-cvye5q6MzLk5saxR2uM1EMfrp1DIuSRn49ZdwVRutc1exNNLhC~kQ2O0oUFup19PJA9zgETENAc6hBLdKR4JML4wO5sT5p7KJiPxfKYg8VsmO86b38-rmAX7Evn4KjR7NvrEAGj1c6~f8BI9jPoQxtjihHeSF~htR-3EoK1UkzZu3GzfcuQxecAs6aGiyo76avg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        height={80}
        width={80}
      ></img>
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
          Invoice generated
        </Text>
        <Text
          className="question"
          size={{
            initial: 4,
            sm: 6,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          weight="regular"
          align="left"
        >
          You can save as PDF or send to the email of your customer
        </Text>

        <Flex
          direction="column"
          gap="4"
          style={{
            width: "100%",
          }}
        >
          <Button
            size="4"
            radius="none"
            style={{
              height: "64px",
            }}
            onClick={handleNextClick}
          >
            Send as email
          </Button>
          <Button
            size="4"
            radius="none"
            variant="outline"
            style={{
              color: "#818181",
              border: "1px solid #818181",
              height: "64px",
            }}
            onClick={() => {
              //TODO: Download as PDF
            }}
          >
            Download as PDF
          </Button>
          <Button
            size="4"
            radius="none"
            variant="ghost"
            style={{
              color: "#818181",
              height: "64px",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Return to dashboard
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Confirmation;
