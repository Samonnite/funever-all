import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";

import { LikeIcon } from "components/Icons";
const list = [
  {
    name: "Orivium",
    tags: ["MMO", "STRATEGY", "Immutable-X"],
    score: "8.4",
    time: "Launched on Feb.13th 2023",
  },
  {
    name: "Metawar: Supercharged",
    tags: ["SCI-FI", "SHOOTER", "SIMULATION"],
    score: "9.0",
    time: "Launched on February 13th",
  },
  {
    name: "Axie Infinity",
    tags: ["BREEDING", "CARD", "PVP"],
    score: "9.0",
    time: "Profile Updated: Jan 2, 2024",
  },
  {
    name: "Ducky City",
    tags: ["MMORPG", "OPEN-WORLD", "VIRTUAL-WORLD"],
    score: "8.6",
    time: "Profile Updated: Dec 26, 2023",
  },
  {
    name: "BloodLoop",
    tags: ["MMO", "PVP", "SHOOTER"],
    score: "8.0",
    time: "Profile Updated: Dec 27, 2023 PRESALE",
  },
  {
    name: "IN",
    tags: ["CASUAL", "MMORPG", "PUZZLE"],
    score: "8.4",
    time: "Profile Updated: Jan 2, 2024",
  },
  {
    name: "MarbleVers",
    tags: ["PVP", "RACING"],
    score: "8.3",
    time: "Profile Updated: Jan 2, 2024 LIVE",
  },
];

const RankListPage = () => {
  return (
    <Box pb="10">
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab
            color="#777885"
            fontSize={{
              base: "12px",
              sm: "16px",
            }}
            fontWeight="bold"
            _selected={{ color: "white" }}
          >
            Hot List
          </Tab>
          <Tab
            color="#777885"
            fontSize={{
              base: "12px",
              sm: "16px",
            }}
            fontWeight="bold"
            _selected={{ color: "white" }}
          >
            Appointment List
          </Tab>
          <Tab
            color="#777885"
            fontSize={{
              base: "12px",
              sm: "16px",
            }}
            fontWeight="bold"
            _selected={{ color: "white" }}
          >
            Manufacturer List
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#EE7748"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Flex gap="1" mt="2.5">
              <Tag bg="#432B21" fontSize="10px" color="#EE7748">
                assemble
              </Tag>
              <Tag bg="#1F2127" fontSize="10px" color="#777885">
                New product
              </Tag>
              <Tag bg="#1F2127" fontSize="10px" color="#777885">
                action
              </Tag>
              <Tag bg="#1F2127" fontSize="10px" color="#777885">
                leisure time
              </Tag>
              <Tag bg="#1F2127" fontSize="10px" color="#777885">
                Sandbox
              </Tag>
              <Tag bg="#1F2127" fontSize="10px" color="#777885">
                place
              </Tag>
            </Flex>
            <Box
              position="relative"
              py={{
                base: "10",
                md: "6",
              }}
            >
              <Divider borderColor="#36383D" />
              <AbsoluteCenter
                bg="#15181D"
                px="4"
                color="#36383D"
                fontSize="xs"
                fontWeight="600"
              >
                Calculated by heat, updated every 20 minutes
              </AbsoluteCenter>
            </Box>
            {list.map((item, index) => {
              return (
                <Flex
                  key={index}
                  mt={index === 0 ? "0" : "4"}
                  gap="2"
                  bg="#1F2127"
                  p="4"
                  rounded="xl"
                  alignItems="center"
                >
                  <Box fontSize="2xl" fontWeight="semibold" color="white">
                    {index + 1}
                  </Box>
                  <Box
                    rounded="20%"
                    overflow="hidden"
                    width={{
                      base: "80px",
                      lg: "100px",
                    }}
                    height={{
                      base: "80px",
                      lg: "100px",
                    }}
                  >
                    <Image
                      width="100"
                      height="100"
                      alt={`top${index}`}
                      src={`/images/rank/hot${index + 1}.png`}
                    />
                  </Box>

                  <Flex flex="1" direction="column">
                    <Box fontSize="sm" fontWeight="semibold" color="white">
                      {item.name}
                    </Box>

                    <Flex gap="1" mt="2.5">
                      {item.tags.map((item, tagIndex) => {
                        return (
                          <Tag
                            bg="#36383D"
                            fontSize="10px"
                            color="#9A9A9A"
                            key={tagIndex}
                          >
                            {item}
                          </Tag>
                        );
                      })}
                    </Flex>
                    <Flex mt="2.5" gap="2" alignItems="center">
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
                      <Box color="#777885" fontSize="xs">
                        {item.time}
                      </Box>
                    </Flex>
                  </Flex>
                  <Box
                    rounded="xl"
                    width="209"
                    height="100"
                    overflow="hidden"
                    display={{
                      base: "none",
                      sm: "block",
                      md: "block",
                      lg: "none",
                      xl: "block",
                    }}
                  >
                    <Image
                      width="209"
                      height="100"
                      alt={`top${index}`}
                      src={`/images/rank/hot${index + 1}-1.png`}
                    />
                  </Box>
                </Flex>
              );
            })}
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RankListPage;
