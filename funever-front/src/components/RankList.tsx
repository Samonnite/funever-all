import { Avatar, Box, Flex, Image, Tag } from "@chakra-ui/react";
import React from "react";

import { LanguageIcon, LikeIcon, NoticeIcon } from "./Icons";

const list = [
  { title: "The Sandbox", tags: ["RPG", "OpenWorld", "ETH"], score: "9.0" },
  { title: "Axie Infinity", tags: ["ARCADE", "ETH", "RONIN"], score: "8.7" },
  { title: "Decentraland", tags: ["CASUAL", "ETH", "Polygon"], score: "8.6" },
  { title: "STEPN", tags: ["MoveToEarn", "BNB Chain"], score: "9.1" },
  { title: "Gala Games", tags: ["P2E", "ETH"], score: "8.9" },
  { title: "Otherside", tags: ["METAVERSE", "ETH"], score: "8.3" },
  { title: "Illuvium", tags: ["RPG", "ETH"], score: "8.7" }, //
  { title: "Legends Of Elumia", tags: ["RPG", "Solana"], score: "8.5" },
  { title: "Cheelee", tags: ["METAVERSE"], score: "9.0" },
  { title: "Seascape Crowns", tags: ["METAVERSE", "ETH"], score: "7.8" },
  {
    title: "My Neighbor Alice",
    tags: ["SIMULATION", "BNB Chain", "Chromia"],
    score: "7.5",
  },
];

const RankList = () => {
  return (
    <Box
      w="320px"
      h="full"
      pb="10"
      display={{
        lg: "block",
        base: "none",
      }}
    >
      <Flex
        gap="5"
        justifyContent="flex-end"
        pb="5"
        position="sticky"
        top="0"
        pt="8"
        bg="#15181D"
      >
        <LanguageIcon boxSize="6" />
        <NoticeIcon width="21px" height="26px" />
        <Avatar name="avatar" src="/images/avatar.png" size="xs" />
      </Flex>
      <Box bg="#1F2127" px="4" py="3" rounded="xl">
        <Box color="white" fontWeight="bold" pb="3">
          TOP GAMES
        </Box>
        {list.map((item, index) => {
          return (
            <Flex key={index} mt={index === 0 ? "0" : "4"} gap="2">
              <Box rounded="20%" overflow="hidden" width="64px" height="64px">
                <Image
                  width="64"
                  height="64"
                  alt={`top${index}`}
                  src={`/images/rank/top${index}.png`}
                />
              </Box>

              <Flex flex="1" direction="column">
                <Flex justifyContent="space-between" w="full">
                  <Box fontSize="sm" fontWeight="semibold" color="white">
                    {item.title}
                  </Box>
                  <Flex
                    fontSize="sm"
                    fontWeight="semibold"
                    color="white"
                    alignItems="center"
                    gap="1"
                  >
                    <LikeIcon boxSize="3" />
                    {item.score}
                  </Flex>
                </Flex>
                <Flex gap="1" mt="2.5">
                  {item.tags.map((tag, tagIndex) => {
                    return (
                      <Tag
                        bg="#36383D"
                        fontSize="10px"
                        color="#9A9A9A"
                        key={tagIndex}
                      >
                        {tag}
                      </Tag>
                    );
                  })}
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Box>
      <Box fontSize="xs" color="#777885" mt="5">
        About Us | Developers | Career Opportunities Product Suggestions and
        Feedback Status Page | Certification | Promotion Center Resource
        Replacement Service Infringement Complaint | Friendly Links Service
        Agreement | Privacy Policy © 2023 funever
      </Box>
    </Box>
  );
};

export default RankList;
