import React from "react";
import {
  HStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Container from "./container";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      bg={useColorModeValue("white", "neutralD.100")}
      display="block"
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("neutral.400", "neutralD.400")}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <Container>
        <HStack justify="space-between" w="100%" h={16}>
          <Link href="/">Entrance Exam Info</Link>
          <ThemeToggle />
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
