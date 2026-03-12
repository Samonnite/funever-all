import { Box, Flex, Grid, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";

import { DuckIcon, HourseIcon, OctopusIcon, RightIcon } from "components/Icons";

const list = [
  {
    title: "Pre sale and whitelist",
    list: [
      {
        name: "Ducky City",
      },
      {
        name: "Domenation",
      },
      {
        name: "Machiavellic",
      },
      {
        name: "Overworldd",
      },
      {
        name: "Ordz Games",
      },
      {
        name: "Shrapnel",
      },
    ],
  },
  {
    title: "Coming Soon",
    list: [
      {
        name: "DevoLand",
      },
      {
        name: "Infernal Uprising",
      },
      {
        name: "Castile",
      },
      {
        name: "Nexus",
      },
      {
        name: "BRN Metaverse",
      },
      {
        name: "WarEden",
      },
    ],
  },
  {
    title: "Recent updates",
    list: [
      {
        name: "META ARENA",
      },
      {
        name: "Echo Of The Horizon",
      },
      {
        name: "AstraArk",
      },
      {
        name: "Devomon Callisto",
      },
      {
        name: "OverTrip",
      },
      {
        name: "Capsule Heroes",
      },
    ],
  },
  {
    title: "Editor's recommendation",
    list: [
      {
        name: "Upland",
      },
      {
        name: "Ragnarok Landverse",
      },
      {
        name: "BombCrypto",
      },
      {
        name: "EgoVersus",
      },
      {
        name: "Brawler Master",
      },
      {
        name: "Pome Survival",
      },
    ],
  },
  {
    title: "AAA games",
    list: [
      {
        name: "BigTime",
      },
      {
        name: "Star Atlas",
      },
      {
        name: "SIDUS HEROES",
      },
      {
        name: "DeVerse",
      },
      {
        name: "SpaceY 2025",
      },
      {
        name: "Illuvium",
      },
    ],
  },
  {
    title: "The most anticipated games of 2024",
    list: [
      {
        name: "Green Bitcoin",
      },
      {
        name: "Meta Masters Guild",
      },
      {
        name: "Swords of Blood",
      },
      {
        name: "Calvaria",
      },
      {
        name: "Tamadoge",
      },
      {
        name: "Battle Infinity",
      },
    ],
  },
];

const GamingCirclePage = () => {
  return (
    <Box pb="10">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{
          base: "5",
          md: "10",
        }}
        mb="5"
      >
        <Flex
          bg="#443F3C"
          rounded="lg"
          py="4"
          direction="column"
          alignItems="center"
        >
          <HourseIcon boxSize="7" />
          <Box fontSize="10px" color="#F4AC3D">
            Pre sale and whitelist
          </Box>
          <Box fontWeight="600" fontSize="sm" color="#F4AC3D">
            16 styles
          </Box>
        </Flex>
        <Flex
          bg="#333F4F"
          rounded="lg"
          py="4"
          direction="column"
          alignItems="center"
        >
          <DuckIcon boxSize="7" />
          <Box fontSize="10px" color="#50B2F9">
            Coming online and airdropped
          </Box>
          <Box fontWeight="600" fontSize="sm" color="#50B2F9">
            23 styles
          </Box>
        </Flex>
        <Flex
          bg="#34414B"
          rounded="lg"
          py="4"
          direction="column"
          alignItems="center"
        >
          <OctopusIcon boxSize="7" />
          <Box fontSize="10px" color="#5ECAD9">
            Recent updates
          </Box>
          <Box fontWeight="600" fontSize="sm" color="#5ECAD9">
            450 styles
          </Box>
        </Flex>
      </Grid>
      {list.map((item, tIndex) => {
        return (
          <>
            <Flex
              gap="1"
              key={tIndex}
              mt={tIndex === 0 ? "0" : "4"}
              alignItems="center"
              // w="100vw"
              // overflow="hidden"
            >
              <Box fontSize="lg" color="white" fontWeight="bold">
                {item.title}
              </Box>
              {/* <Box width="fit-content"> */}
              {/* <Flex bg="#36383D" rounded="3xl" py="1">
                <Flex alignItems="center" justifyContent="center" > */}
              <RightIcon boxSize="5" color="#777885" />
              {/* </Flex>
              </Flex> */}
              {/* </Box> */}
            </Flex>
            <Grid
              templateColumns={{
                base: "repeat(3, 1fr)",
                // sm: 'repeat(2, 1fr)',
                md: "repeat(6, 1fr)",
              }}
              mt="4"
              gap="2"
            >
              {item.list.map((item, index) => {
                return (
                  <Box
                    key={`${tIndex}-${index}`}
                    width="fit-content"
                    textAlign="center"
                  >
                    <Box
                      rounded="xl"
                      // overflow="hidden"
                      // maxW={{
                      //   base: '60px',
                      //   md: '100px',
                      //   lg:'65px',
                      //   xl: '100px'
                      // }}
                      // height={{
                      //   base: '60px',
                      //   md: '100px',
                      //   lg:'65px',
                      //   xl: '100px'
                      // }}
                    >
                      <Image
                        width="100"
                        height="100"
                        alt={`top1`}
                        src={`/images/game/game${tIndex}-${index}.png`}
                      />
                    </Box>
                    <Text
                      color="white"
                      fontSize="xs"
                      fontWeight="semibold"
                      mt="1"
                      textAlign="center"
                      maxW={{
                        base: "none",
                        md: "100px",
                        lg: "50px",
                        xl: "100px",
                      }}
                      overflowWrap="break-word"
                    >
                      {item.name}
                    </Text>
                  </Box>
                );
              })}
            </Grid>
          </>
        );
      })}
    </Box>
  );
};

export default GamingCirclePage;
