import {
  Box,
  Button,
  Flex,
  Grid,
  Image as ImageUi,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  LikeIcon,
} from "components/Icons";

const list = [
  {
    name: "The Shield of Reflection",
    score: "8.4",
    tags: ["Web3Gaming", "Ongoing"],
    desc: "Follow @Galaxia3Studios on Twitter",
    community: "Twitter",
    xp: "150",
    frequency: "Once",
  },
  {
    name: "Frens On Chain Multichain Celebration!",
    score: "9.0",
    tags: ["FullyOnChainGames", "Ongoing"],
    desc: "Follow @Galaxia3Studios on Twitterr",
    community: "Twitter",
    xp: "50",
    frequency: "Once",
  },
  {
    name: "EOS Winter Festival",
    score: "8.6",
    tags: ["Swap", "Ongoing"],
    desc: "Follow @mesonfi on Twitter",
    community: "Twitter",
    xp: "50",
    frequency: "Once",
  },
  {
    name: "6000 $FMB Distribution (FCFS)",
    score: "8.0",
    tags: ["Twitter", "Ongoing"],
    desc: "Retweet this post",
    community: "Twitter",
    xp: "50",
    frequency: "Once",
  },
  {
    name: "Earn the Cyber Raider",
    score: "9.6",
    tags: ["community", "Ongoing"],
    desc: "Follow @cybersyndicate0 on Twitter",
    community: "Twitter",
    xp: "100",
    frequency: "Once",
  },
  {
    name: "The Shield of Reflection",
    score: "8.4",
    tags: ["Web3Gaming", "Ongoing"],
    desc: "Retweet this post",
    community: "Twitter",
    xp: "10",
    frequency: "Daily",
  },
  {
    name: "Insider",
    score: "9.1",
    tags: ["FCFS", "Point"],
    desc: "Messaged in Side Protocol Discord",
    community: "Discord",
    xp: "30",
    frequency: "Daily",
  },
  {
    name: "FUN QUIZ B",
    score: "8.7",
    tags: ["Flash", "Ongoing", "Limited Quests"],
    desc: "We are in contact with many Web3 event organizers!",
    community: "Question",
    xp: "30",
    frequency: "Daily",
  },
];

const TaskPage = () => {
  return (
    <Box pb="10">
      <Flex justifyContent="space-between" mb="4">
        <Box color="white" fontSize="lg" fontWeight="semibold">
          Total 3570
        </Box>
        <Flex
          gap="2"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Box color="#777885" fontSize="sm">
            #download
          </Box>
          <Box color="#777885" fontSize="sm">
            #community
          </Box>
          <Box color="#777885" fontSize="sm">
            #Twitter
          </Box>
          <Box color="#777885" fontSize="sm">
            #stay with us
          </Box>
        </Flex>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon width="10px" height="6px" />}
            bg="#1F2127"
            py="0"
            px="8"
            color="#777885"
            fontSize="sm"
            _hover={{
              bg: "#1F2127",
            }}
          >
            Latest
          </MenuButton>
          <MenuList bg="#1F2127" color="#777885" borderColor="#1F2127">
            <MenuItem bg="#1F2127">Latest</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex
        gap="2"
        mb="4"
        display={{
          base: "flex",
          md: "none",
        }}
        justifyContent="center"
      >
        <Box color="#777885" fontSize="sm">
          #download
        </Box>
        <Box color="#777885" fontSize="sm">
          #community
        </Box>
        <Box color="#777885" fontSize="sm">
          #Twitter
        </Box>
        <Box color="#777885" fontSize="sm">
          #stay with us
        </Box>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap="5"
      >
        {list.map((item, index) => {
          return (
            <Box rounded="lg" bg="#1F2127" overflow="hidden" key={index} py="4">
              <Flex key={index} gap="2" px="4">
                <Box rounded="20%" overflow="hidden">
                  <Image
                    width="64"
                    height="64"
                    alt={`top${index}`}
                    src={`/images/quest/quest${index}.png`}
                  />
                </Box>

                <Flex flex="1" direction="column">
                  <Flex justifyContent="space-between" w="full">
                    <Box fontSize="sm" fontWeight="semibold" color="white">
                      {item.name}
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
                    {item.tags.map((tag, tagIndex) => (
                      <Tag
                        bg="#36383D"
                        fontSize="10px"
                        color="#9A9A9A"
                        key={tagIndex}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
              <Box fontSize="sm" color="#777885" py="3" px="4">
                {item.desc}
              </Box>
              <Box position="relative" zIndex="10">
                <ImageUi
                  src="/images/task/divider.svg"
                  alt="divider"
                  width="100%"
                />
                <Box
                  position="absolute"
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  color="#FF6917"
                  fontWeight="semibold"
                >
                  {item.xp}XP
                </Box>
              </Box>
              <Flex justifyContent="space-between" px="4">
                <Box fontSize="xs" color="#777885">
                  #{item.community}
                </Box>
                <Box color="#F95625" fontSize="sm">
                  {item.frequency}
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Grid>
      <Flex
        bg="#1F2127"
        py="3"
        mt="5"
        rounded="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <ArrowLeftIcon width="15" height="13" />
        </Box>
        <Box fontSize="sm" color="white">
          &nbsp;&nbsp;page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of
          24&nbsp;&nbsp;
        </Box>
        <Box>
          {" "}
          <ArrowRightIcon width="15" height="13" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TaskPage;
