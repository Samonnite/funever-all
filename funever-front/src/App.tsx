import { Box, ChakraProvider, Container, theme } from "@chakra-ui/react";
import { useLocalStorageState } from "ahooks";
import { useEffect } from "react";

// routes
import { FuneverRouter } from "./router";

import { getApiConfig } from "api";
import { ApiConf } from "api/model";
import { Wallet } from "components/wallet";

import "./globals.css";
// eslint-disable-next-line import/order
import Layout from "./Layout";

export const App = () => {
  const [config, setConfig] = useLocalStorageState<ApiConf>("config-block");
  const getConfig = async () => {
    const res = await getApiConfig();
    setConfig(res.data);
  };
  useEffect(() => {
    getConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!config) {
    return (
      <ChakraProvider theme={theme}>
        <Box h="100vh" w="full" bg="#1D1D1D" overflowY="auto" id="container">
          <Container maxW="1500px" bg="#1D1D1D" px="0"></Container>
        </Box>
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider theme={theme}>
      <Wallet config={config}>
        <Box h="100vh" w="full" bg="#1D1D1D" overflowY="auto" id="container">
          <Container maxW="1500px" bg="#1D1D1D" px="0">
            <Layout config={config}>
              <FuneverRouter />
            </Layout>
          </Container>
        </Box>
      </Wallet>
    </ChakraProvider>
  );
};
