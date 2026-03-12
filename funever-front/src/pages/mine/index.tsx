import { Avatar, Box, Flex, Grid, Image, useToast } from "@chakra-ui/react";
import numeral from "numeral";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { useLayoutContext } from "Layout";
import Header from "components/Header";
import {
  FansIcon,
  PostIcon,
  QuizIcon,
  QuizManageIcon,
  ReplayIcon,
  RightIcon,
  SettingIcon,
  SubscribeIcon,
} from "components/Icons";

export default function RootLayout() {
  const toast = useToast();
  const { userInfo, coinList } = useLayoutContext();
  const { account } = useLayoutContext();

  const coinBalanceList = useMemo(() => {
    return coinList?.map((item) => {
      return {
        ...item,
        balance: item.mint
          ? account?.allBalance?.[item?.mint] || 0
          : account?.allBalance?.SOL || 0,
      };
    });
  }, [account?.allBalance, coinList]);

  return (
    <Flex flex="1" direction="column">
      <Header
        extra={
          <Link to="/mine/setting">
            <SettingIcon boxSize="6" />
          </Link>
        }
        isTransparent
        mx="0"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        bg="linear-gradient(180deg, #F95625 0%, rgba(249, 86, 37, 0) 100%)"
        h="268px"
        w="full"
      ></Box>
      <Box color="white" position="relative" zIndex="9" flex="1">
        <Box
          position="absolute"
          top="110px"
          left="0"
          bg="black"
          w="full"
          h="calc(100% - 110px)"
          zIndex="-1"
          roundedTop="lg"
        ></Box>
        <Flex px="4">
          <Avatar
            src={userInfo?.logo}
            boxSize="12"
            mr="3"
            border={userInfo?.logo ? "" : "0.5px solid #A5A5A5"}
            as="span"
          />
          <Box fontSize="lg" fontWeight="semibold">
            {userInfo?.name}
          </Box>
        </Flex>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="12"
          fontSize="sm"
          px="6"
          py="2.5"
          bg="#1D1D1D"
          rounded="lg"
          mt="7"
          mx="3"
        >
          <Box textAlign="center" as={Link} to="/mine/quiz">
            <QuizIcon boxSize="8" />
            <Box pt="2">我的竞猜</Box>
          </Box>
          <Box
            textAlign="center"
            onClick={() =>
              toast({
                description: "暂未开放",
                duration: 2000,
              })
            }
          >
            <SubscribeIcon boxSize="8" />
            <Box pt="2">我的订阅</Box>
          </Box>
          <Box
            textAlign="center"
            onClick={() =>
              toast({
                description: "暂未开放",
                duration: 2000,
              })
            }
          >
            <PostIcon boxSize="8" />
            <Box pt="2">我的帖子</Box>
          </Box>
        </Grid>
        <Box px="3" py="2.5" bg="#1D1D1D" rounded="lg" m="3" fontSize="sm">
          <Box pb="2">我的资产</Box>
          {coinBalanceList?.map((item) => (
            <Flex
              key={item?.coin}
              h="12"
              justifyContent="space-between"
              alignItems="center"
              as={Link}
              to={`/mine/flow/${item?.coin}`}
            >
              <Flex>
                <Image
                  width="6"
                  height="6"
                  src={item?.logo}
                  alt="home"
                  rounded="full"
                />
                <Box fontSize="md" pl="3" fontWeight="semibold">
                  {numeral(item?.balance).format("0,0[.][000000]")}
                </Box>
              </Flex>
              <Flex color="#A5A5A5">
                {item?.coin}
                <RightIcon boxSize="5" ml="2" color="#777885" />
              </Flex>
            </Flex>
          ))}
        </Box>
        <Box px="3" bg="#1D1D1D" rounded="lg" m="3" fontSize="sm">
          {userInfo?.type === "admin" && (
            <Flex
              h="60px"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #777885"
              as={Link}
              to="/manage"
            >
              <Flex>
                <QuizManageIcon boxSize="6" />
                <Box pl="3">管理竞猜</Box>
              </Flex>
              <RightIcon boxSize="5" ml="2" color="#777885" />
            </Flex>
          )}
          <Flex
            h="60px"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #777885"
            onClick={() =>
              toast({
                description: "暂未开放",
                duration: 2000,
              })
            }
          >
            <Flex>
              <ReplayIcon boxSize="6" />
              <Box pl="3">我的回复</Box>
            </Flex>
            <RightIcon boxSize="5" ml="2" color="#777885" />
          </Flex>
          <Flex
            h="60px"
            justifyContent="space-between"
            alignItems="center"
            onClick={() =>
              toast({
                description: "暂未开放",
                duration: 2000,
              })
            }
          >
            <Flex>
              <FansIcon boxSize="6" />
              <Box pl="3">我的粉丝</Box>
            </Flex>
            <RightIcon boxSize="5" ml="2" color="#777885" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
