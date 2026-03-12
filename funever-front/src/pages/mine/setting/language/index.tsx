import { Box, Flex } from "@chakra-ui/react";

import LanguageCheck from "./LanguageCheck";

import Header from "components/Header";

export default function RootLayout() {
  return (
    <Flex flex="1" direction="column">
      <Header title="语言" />
      <Box color="white">
        <Box px="3" fontSize="sm">
          <LanguageCheck />
        </Box>
      </Box>
    </Flex>
  );
}
