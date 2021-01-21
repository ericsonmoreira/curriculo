import * as React from "react";
import { ChakraProvider, Box, Text, Code, theme } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Text>
        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
      </Text>
    </Box>
  </ChakraProvider>
);
