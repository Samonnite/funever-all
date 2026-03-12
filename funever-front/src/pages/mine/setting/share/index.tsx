import { Avatar, Box, Center, Flex } from "@chakra-ui/react";

import GenerateImage from "./GenerateImage";
import Qrcode from "./QrCode";

import Header from "components/Header";

export const ShareBox = () => (
  <Box fontSize="sm" id="box-share">
    <Center fontSize="xl" fontWeight="semibold">
      分享链接得高额收益！
    </Center>
    <Flex
      direction="column"
      alignItems="center"
      bgImage="url(/images/share/share-bg.png)"
      bgSize="contain"
      bgRepeat="no-repeat"
      mt="5"
      pt="150%"
      position="relative"
    >
      <Box position="absolute" bottom="12%" w="full">
        <Flex px="6" pr="9" justifyContent="space-between">
          <Box>
            <Flex alignItems="center">
              <Avatar
                name="coin"
                src="/images/default-logo.png"
                boxSize="10"
                mr="4"
              />
              <Box fontSize="sm" color="white">
                OxDf...B29A
              </Box>
            </Flex>
            <Box pt="3" color="#A5A5A5" fontSize="xs">
              扫码打开链接即可登录游玩
            </Box>
          </Box>
          <Qrcode />
        </Flex>
      </Box>
    </Flex>
  </Box>
);

export default function RootLayout() {
  return (
    <Flex flex="1" direction="column">
      <Header />
      <Box color="white" mx="9">
        <ShareBox />
        <GenerateImage />
      </Box>
    </Flex>
  );
}
