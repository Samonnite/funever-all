import { Box, Flex, Grid, Image, useToast } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  CommunityIcon,
  ForumIcon,
  RankIcon,
  StarIcon,
  TaskIcon,
} from "./Icons";

const routers = [
  {
    title: "竞猜",
    path: "/home",
    icon: <StarIcon color="#777885" boxSize="6" />,
    activeIcon: <StarIcon color="#F95625" boxSize="6" />,
    isMobile: true,
  },
  {
    title: "任务",
    // path: "/home/task",
    path: "",
    icon: <TaskIcon color="#777885" boxSize="6" />,
    activeIcon: <TaskIcon color="#F95625" boxSize="6" />,
    isMobile: true,
  },
  {
    title: "论坛",
    // path: "/home/rankingList",
    path: "",
    icon: <ForumIcon color="#777885" boxSize="6" />,
    activeIcon: <ForumIcon color="#F95625" boxSize="6" />,
    isMobile: true,
  },
  {
    title: "排行",
    // path: "/home/gamingCircle",
    path: "",
    icon: <RankIcon color="#777885" boxSize="6" />,
    activeIcon: <RankIcon color="#F95625" boxSize="6" />,
    isMobile: true,
  },
  {
    title: "社区",
    // path: "/home/community",
    path: "",
    icon: <CommunityIcon color="#777885" boxSize="6" />,
    activeIcon: <CommunityIcon color="#F95625" boxSize="6" />,
    isMobile: true,
  },
  // {
  //   title: "NFT Trading",
  //   path: "/home/NFTTrading",
  //   icon: <StarIcon color="#777885" boxSize="6" />,
  //   activeIcon: <StarIcon color="#F95625" boxSize="6" />,
  //   isMobile: false,
  // },
  // {
  //   title: "IDO",
  //   path: "/home/ido",
  //   icon: <StarIcon color="#777885" boxSize="6" />,
  //   activeIcon: <StarIcon color="#F95625" boxSize="6" />,
  //   isMobile: false,
  // },
];

const SideNavbar = () => {
  const toast = useToast();
  const { pathname } = useLocation();
  return (
    <>
      <Flex
        h="100vh"
        bg="#1F2127"
        pt="5"
        direction="column"
        alignItems="center"
        px="10"
        position="sticky"
        top="0"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Link to="/">
          <Image
            alt="funever"
            src="/images/logo.png"
            width="60"
            height="60"
            objectFit="contain"
          />
        </Link>
        <Box h="4" w="full"></Box>
        {routers.map((router, index) => {
          const isCurrRoute = pathname === router.path;
          return (
            <Link
              to={router.path}
              key={index}
              onClick={(e) => {
                if (!router.path) {
                  console.log(111);

                  e.preventDefault();
                  toast({
                    description: "暂未开放",
                    duration: 2000,
                  });
                }
              }}
            >
              <Flex
                w="110px"
                h="90px"
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                {isCurrRoute ? router.activeIcon : router.icon}
                <Box
                  color={isCurrRoute ? "#F95625" : "#777885"}
                  fontSize="sm"
                  fontWeight="semibold"
                  mt="1"
                  textAlign="center"
                >
                  {router.title}
                </Box>
              </Flex>
            </Link>
          );
        })}
      </Flex>
      <Grid
        w="full"
        bg="#2F2F2F"
        py="4"
        alignItems="center"
        px="2"
        position="fixed"
        bottom="0"
        left="0"
        display={{
          base: "grid",
          md: "none",
        }}
        zIndex="20"
        templateColumns="repeat(5, 1fr)"
        boxShadow="0px -1px 0px 0px #1A1A1A"
      >
        {routers.map((router, index) => {
          if (!router.isMobile) {
            return;
          }
          const isCurrRoute = pathname === router.path;
          return (
            <Link
              to={router.path}
              key={index}
              onClick={(e) => {
                if (!router.path) {
                  e.preventDefault();
                  toast({
                    description: "暂未开放",
                    duration: 2000,
                  });
                }
              }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                {isCurrRoute ? router.activeIcon : router.icon}
                <Box
                  color={isCurrRoute ? "#F95625" : "#777885"}
                  fontSize="xs"
                  mt="1.5"
                  textAlign="center"
                >
                  {router.title.split(" ")[0]}
                </Box>
              </Flex>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default SideNavbar;
