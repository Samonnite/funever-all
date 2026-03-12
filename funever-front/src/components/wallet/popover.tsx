import {
  Avatar,
  Flex,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  CutWalletIcon,
  TriangleDownIcon,
  WalletActiveIcon,
  WalletIcon,
} from "../Icons";

export default function WalletPopover({
  onOpenWallet,
}: {
  onOpenWallet: () => void;
}) {
  const toast = useToast();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { wallet, disconnect, publicKey, connected } = useWallet();

  const addr = useMemo(() => publicKey?.toBase58() || "", [publicKey]);

  const handleOpen = (e: any) => {
    e.preventDefault();
    if (connected) {
      isOpen ? onClose() : onOpen();
    } else {
      onOpenWallet();
    }
  };

  const handleDisconnect = () => {
    onClose();
    disconnect();
  };

  return (
    <Popover
      placement="bottom-start"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Flex alignItems={"center"} onClick={handleOpen}>
          {connected ? (
            <WalletActiveIcon boxSize="30px" />
          ) : (
            <WalletIcon boxSize="30px" />
          )}
          <TriangleDownIcon
            boxSize="6"
            color={connected ? "#F95625" : "#A5A5A5"}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        bg="#404040"
        borderColor="#404040"
        w="max-content"
        fontSize="xs"
        px="2"
        _focusVisible={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <PopoverArrow bg="#404040" shadowColor="#404040" />
        <CopyToClipboard
          text={addr}
          onCopy={() =>
            toast({
              description: "复制成功",
              duration: 2000,
            })
          }
        >
          <Flex
            h="8"
            borderBottom="1px solid #777885"
            alignItems="center"
            color="#F95625"
          >
            <Avatar
              name="coin"
              src={wallet?.adapter?.icon}
              boxSize="4"
              mr="1.5"
            />
            {addr?.slice(0, 4) + ".." + addr?.slice(-4)}
          </Flex>
        </CopyToClipboard>
        <Flex
          h="8"
          alignItems="center"
          color="white"
          onClick={handleDisconnect}
        >
          <CutWalletIcon boxSize="4" mr="1.5" />
          断开钱包
        </Flex>
      </PopoverContent>
    </Popover>
  );
}
