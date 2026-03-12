import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import { CopyLinkIcon } from "../Icons";

export default function Share({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const toast = useToast();
  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay backdropFilter="blur(3px)" />
      <DrawerContent bg="#000000" color="white">
        <DrawerCloseButton />
        <DrawerHeader fontSize="md">分享</DrawerHeader>
        <DrawerBody>
          <Grid templateColumns="repeat(3, 1fr)" gap="10" fontSize="sm">
            <Box textAlign="center">
              <TwitterShareButton url={window?.location.host}>
                <TwitterIcon size={44} round />
              </TwitterShareButton>
              <Box pt="2">Twitter</Box>
            </Box>
            <Box textAlign="center">
              <TelegramShareButton url={window?.location.host}>
                <TelegramIcon size={44} round />
              </TelegramShareButton>
              <Box pt="2">Telegram</Box>
            </Box>
            <Box textAlign="center">
              <CopyToClipboard
                text={window?.location.host}
                onCopy={() =>
                  toast({
                    description: "复制成功",
                    duration: 2000,
                  })
                }
              >
                <CopyLinkIcon boxSize="44px" />
              </CopyToClipboard>
              <Box pt="2">Copy link</Box>
            </Box>
          </Grid>
        </DrawerBody>
        <DrawerFooter justifyContent="center" onClick={onClose}>
          <Box>
            <Box
              h="1"
              bg="#2F2F2F"
              w="full"
              mt="1"
              position="absolute"
              left="0"
            ></Box>
            <Box h="10" pt="3" mt="2.5">
              取消
            </Box>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
