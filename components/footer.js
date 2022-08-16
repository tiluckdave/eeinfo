import React from "react";
import {
  HStack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Container from "../components/container";
import NextLink from "next/link";
import Link from "./link";

const Footer = () => {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{ color: useColorModeValue("neutral.1000", "neutralD.1000") }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        <Text
          fontSize="sm"
          color={useColorModeValue("neutral.800", "neutralD.800")}
        >
          © {date} Entrance Exam Info {" "}
        </Text>
        <Text
          fontSize="sm"
          color={useColorModeValue("neutral.800", "neutralD.800")}
        >
          Made with <span role="img" aria-label="love">❤️ & ☕</span> by{" "}Tilak Dave
        </Text>
      </HStack>
    </Container>
  );
};
export default Footer;
