import {
  Box,
  Button,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

import { ChevronDownIcon, UserGroupIcon } from "components/Icons";

const list = [
  {
    name: "GAMC",
    count: "1.3k",
  },
  {
    name: "DF ARES",
    count: "4.5k",
  },
  {
    name: "WebSea",
    count: "24.4k",
  },
  {
    name: "DeCGame",
    count: "28.1K",
  },
  {
    name: "SocialScan",
    count: "26.2K",
  },
  {
    name: "Gamic",
    count: "13.7K",
  },
  {
    name: "Optimism",
    count: "29.6K",
  },
  {
    name: "Mintlayer",
    count: "7.1K",
  },
  {
    name: "Fuel",
    count: "3.7K",
  },
  {
    name: "GasZero",
    count: "3.1K",
  },
  {
    name: "readon",
    count: "1.8K",
  },
  {
    name: "DefiBox",
    count: "1.2K",
  },
];

const CommunityPage = () => {
  // const list = Array(12).fill(0);

  return (
    <Box pb="10">
      <Flex justifyContent="space-between" mb="5">
        <Box fontSize="lg" color="white" fontWeight="semibold">
          COMMUNITY
        </Box>
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
      <Grid templateColumns="repeat(3, 1fr)" gap="5">
        {list.map((item, index) => {
          return (
            <Flex
              rounded="lg"
              bg="#1F2127"
              key={index}
              p="5"
              // px="5"
              direction="column"
              alignItems="center"
            >
              <Box
                rounded="xl"
                width="fit-content"
                height="fit-content"
                overflow="hidden"
              >
                <Image
                  width="100"
                  height="100"
                  alt={`top1`}
                  src={`/images/community/community${index}.png`}
                />
              </Box>
              <Box color="white" fontSize="xs" fontWeight="600" mt="2.5">
                {item.name}
              </Box>
              <Flex
                color="#777885"
                fontSize="10px"
                fontWeight="600"
                mt="2.5"
                alignItems="center"
              >
                <UserGroupIcon mr="1" />
                {item.count}
              </Flex>
              <Button
                colorScheme="orange"
                bg="#F95625"
                rounded="lg"
                color="white"
                fontWeight="semibold"
                fontSize="sm"
                width="fit-content"
                size="sm"
                px={{
                  base: "5",
                  md: "12",
                }}
                mt="2.5"
              >
                join
              </Button>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CommunityPage;
