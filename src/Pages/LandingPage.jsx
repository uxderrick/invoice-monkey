import { Heading, Text, Flex, Box, Button, Em } from "@radix-ui/themes";
import React, { useEffect } from "react";

const LandingPage = () => {
  //
  return (
    <>
      <Box className="big-box landing-center-guy">
        <Box
          py="1"
          style={{
            backgroundColor: "var(--zinc-900, #1B1B1B)",
            color: "white",
          }}
        >
          <Flex direction="column" gap="5" align={"center"}>
            {/* logo */}
            <img
              className="container"
              src="https://s3-alpha-sig.figma.com/img/4526/e058/cad082685a014d18b93e42c167e74cba?Expires=1701648000&Signature=M9pvUTzca-hzOX~sXtt~302dtmA9VS-DvMEUeEZOIHKw2zAh0qdBdNAYfKwxctwygbsRWP62mRH3PGHyMYoxCJPEFGqne5aslG2VDU3gWdAXu3F1qfm5DRmkgBs2SqVqokfDD6ojcWhzZoAjGSu9JOaRY5z6xslRvpMbp8qR4rBlME~pUsoGpEXnSh63A2yglS5HVpwgy~csBNshTKKCrj2pfZ9rfoDOu5Rw9Ipa2SNJ0Ooj-nRXIuvQ7ksdtKrmIRPpyp6mB3j7tXd-h~nw0FqYuc5ajpFl5HsC~orpPfYekN9RTo4yakxsXw7v8XwrtT6wR3711YI-5JQ~Gskqmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              height={160}
            ></img>

            {/* Title block */}
            <Flex
              direction="column"
              gap="2"
              align={"center"}
              style={{
                maxWidth: "720px",
              }}
            >
              <Heading
                align={"center"}
                size={{
                  initial: "9",
                  md: "9",
                  sm: "9",
                  xl: "9",
                }}
                style={{
                  lineHeight: "4.5rem",
                }}
              >
                Create, print, and email an invoice in
                <Text
                  style={{
                    color: "var(--colors-green-9, #30A46C",
                    lineHeight: "4.5rem",
                  }}
                >
                  <> </>3 minutes
                </Text>
              </Heading>
              <Text
                size={{
                  initial: "6",
                  md: "6",
                  sm: "8",
                  xl: "8",
                }}
                align="center"
                style={{
                  color: "var(--grays-gray-10, #818181)",
                }}
              >
                Move your business to the next level with Invoice Monkey
              </Text>
              <Button
                variant="solid"
                size="4"
                style={{
                  marginTop: "1rem",
                }}
              >
                Login with Google
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex>
          <img
            className="container"
            src="https://s3-alpha-sig.figma.com/img/de70/6e5c/d24b42ff1bc9a104a8961438d21c1a1c?Expires=1701648000&Signature=efszUL9kw6yo3evtkCkasTrSrlmXaJZctwbXIYR6nH-E6Z4IjoYBgwfbS-m01YdYVyIgXtDQK5F6s1DJrnENGm3JZ~pMHsG3Fz2GBBgeRBty-y7X7QF~T25uDduWtnAtqW1alTc2jaFXoB62pkPBXql9Y6LDeDQKXE6WCYl7BchRqyeQa2m00yA8XR1viQEkm3o46KveUWL8EF4w-6SPt81VJH3soD0Sn3XTN7aq39J14gHot7QksPWlDJlbNgpzl5atgFZhPP9FMz51YhylkaPQUEN4AxI8GHweNfOkfi71IQmbuGcLzCwwqPiKvVLYOmB3HhNRkQAA4~lMMKstXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            // height={120}

            style={{
              marginTop: "3rem",
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "1rem",
              border: "1px solid var(--zinc-900, #2C2C2C)",
            }}
          ></img>
        </Flex>
      </Box>
      <Flex justify="center">
        <Text
          size="3"
          align="center"
          style={{
            color: "var(--grays-gray-10, #ffffff)",
            marginTop: "2rem",
          }}
        >
          <a href="">Contribute on GitHub</a>
        </Text>
      </Flex>
    </>
  );
};

export default LandingPage;
