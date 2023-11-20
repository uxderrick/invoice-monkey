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

const CreateInvoice = () => {
  return (
    <Flex
      className="create-new"
      justify="center"
      align="center"
      direction="column"
      gap="4"
    >
      <img
        src="https://s3-alpha-sig.figma.com/img/21ba/36b9/3717f5840dc5afcadc69b95b90d1eff6?Expires=1701648000&Signature=Sx-jzkAF-bsMUUxOYEFPOVPtLa2X5GzOcxTH8iTcnKvcDbwNCKBcaYZR6XzZZwz0qX5gYjv4k2uzcCEe--Pw1awH2TTG0E923MdC-zrzPtxBc~cNRG2imsjPUDkulSncitdxIV74tIdnSzwWA4eX0z97ugStP22ocDF797cNd459RR7nxrWx0bIMd1xgXH~emRMqN2lOKh~06xzVjbPlU7-PGfu56AOFcJn9jZKOvTWmHc2B5EUwG1NzUFZxSfhAt9gyF4r5C6TMS1T~jzNUXa44f-GGH15PaL8HOaiabSF8BCy-syFXlBEkBXmbbU6wyLz4MFtDvZ6HjHnxL42OvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        height={56}
      ></img>
      <Text
        align="left"
        style={{
          color: "#fff",
        }}
        size={{
          initial: 4,
          sm: 5,
          md: 5,
          lg: 5,
          xl: 5,
        }}
      >
        Create a new invoice
      </Text>
    </Flex>
  );
};

export default CreateInvoice;
