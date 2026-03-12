import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { BellIcon, SearchIcon, UserIcon } from "./Icons";
import RankList from "./RankList";
import SideNavbar from "./Sidebar";
import { WalletMask } from "./wallet";
import WalletPopover from "./wallet/popover";

import { useLayoutContext } from "Layout";
import { userNoticeQuery } from "api";

const HomeContent = () => {
  const toast = useToast();
  const { token } = useLayoutContext();
  const [total, setTotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const guardLogin = (e: any) => {
    if (!token) {
      e.preventDefault();
      return onOpen();
    }
  };

  const getNotice = async () => {
    const res = await userNoticeQuery({
      pageNum: 1,
      pageSize: 100,
      read: [false],
    });
    setTotal(res.total || 0);
  };

  useEffect(() => {
    if (token) {
      getNotice();
    }
  }, [token]);

  return (
    <Box>
      <SideNavbar />
      <Flex
        direction="column"
        pb={{
          base: "10",
          lg: "0",
        }}
      >
        <Flex
          alignItems="center"
          gap="5"
          position="sticky"
          top="0"
          bg="#1D1D1D"
          zIndex="20"
          px="4"
        >
          <Flex pt="8" pb="5" gap="10" flex="1">
            <Flex
              position="relative"
              alignItems="center"
              bg="rgba(255, 255, 255, 0.08)"
              rounded="100px"
              border="1px solid rgba(255, 255, 255, 0.08)"
              w="full"
              flex="1"
              py="2"
              pl="5"
              onClick={() =>
                toast({
                  description: "暂未开放",
                  duration: 2000,
                })
              }
            >
              <SearchIcon boxSize="5" color="white" />
              <Box color="rgba(255, 255, 255, 0.6)" fontSize="sm" pl="2">
                AI 关键字搜索
              </Box>
            </Flex>
          </Flex>
          <Flex
            gap="5"
            alignItems={"center"}
            pb="5"
            pt="8"
            display={{
              lg: "none",
              base: "flex",
            }}
          >
            <Link to="/notice" onClick={guardLogin}>
              <Avatar
                name=""
                size="xs"
                icon={<BellIcon boxSize="6" />}
                bg="none"
              >
                {token && total > 0 && (
                  <AvatarBadge
                    boxSize="1.4em"
                    bg="#EA4A4B"
                    top="-8px"
                    right={"1px"}
                    borderColor="#EA4A4B"
                    color={"white"}
                  >
                    {total}
                  </AvatarBadge>
                )}
              </Avatar>
            </Link>
            <Link to="/mine" onClick={guardLogin}>
              <UserIcon boxSize="6" />
            </Link>
            <WalletPopover onOpenWallet={onOpen} />
          </Flex>
        </Flex>
        <WalletMask isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Box px="4">
          <Outlet context={{ onOpen, onClose, guardLogin }} />
        </Box>
      </Flex>
      <RankList />
    </Box>
  );
};

export default HomeContent;
