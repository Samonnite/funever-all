import {
  Avatar,
  Box,
  Flex,
  Grid,
  Image,
  Link,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocalStorageState } from "ahooks";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import QuizCard from "./components/QuizCard";

import { apiGameQuery, gameGuessQuery, gameGuessStat } from "api";
import {
  ApiCoinPage,
  ApiGamePage,
  ApiGuessQueryStatusItem,
  GameGuessPage,
  GameGuessStat,
  PageSort,
} from "api/model";
import Header from "components/Header";
import {
  ArrowDownIcon,
  NumberIcon,
  RateIcon,
  TotalIcon,
} from "components/Icons";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";
import QueryList from "pages/quiz/components/QueryList";
const ProcessList = ({
  status,
  gameList,
  sortList,
}: {
  status: ApiGuessQueryStatusItem[];
  gameList?: ApiGamePage[];
  sortList?: PageSort[];
}) => {
  const [gid, setGid] = useState<number>();
  const { loading, list, reset } = usePage<GameGuessPage>(gameGuessQuery, {
    gid,
    status,
    sortList,
  });

  const onChange = (value?: number) => {
    if (gid === value) return;
    setGid(value);
    reset({ gid: value });
  };

  return (
    <>
      <QueryList list={gameList} onChange={onChange} />
      {loading ? (
        <Loading />
      ) : !list.length ? (
        <NoData />
      ) : (
        list.map((item, index) => {
          return (
            <Link
              key={index}
              as={RouterLink}
              to={`/mine/quiz/${item.guessId}`}
              textDecoration="none"
              _hover={{
                textDecoration: "none",
              }}
            >
              <QuizCard item={item} onRefresh={() => reset({ gid })} />
            </Link>
          );
        })
      )}
    </>
  );
};
export default function RootLayout() {
  const defaultGames: ApiGamePage[] = [
    {
      name: "All",
      id: undefined,
      mates: undefined,
    },
  ];
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [gameList, setGameList] = useState<ApiGamePage[]>();
  const [coinList] = useLocalStorageState<ApiCoinPage[]>("coinList");
  const [guessStat, setGuessStat] = useState<GameGuessStat>();
  const [coin, setCoin] = useState<ApiCoinPage>(coinList?.[0] as ApiCoinPage);

  const getGuessStat = async () => {
    const res = await gameGuessStat({ coin: coin?.coin as string });
    setGuessStat(res.data);
  };

  const getGameList = async () => {
    const res = await apiGameQuery({
      pageNum: 1,
      pageSize: 100,
      sortList: [
        {
          field: "rank",
          type: "desc",
        },
      ],
    });
    setGameList(defaultGames.concat(res?.data || []));
  };

  useEffect(() => {
    if (coinList?.length) {
      setCoin(coinList?.[0] as ApiCoinPage);
    }
  }, [coinList]);

  useEffect(() => {
    if (coin) {
      getGuessStat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin]);

  useEffect(() => {
    getGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Flex flex="1" direction="column">
      <Header title="我的竞猜" />
      <Box mx="4" color="white">
        <Box fontWeight="semibold" pb="2.5">
          最近7天
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <Flex
            w="100%"
            h="16"
            bg="#2F2F2F"
            rounded="md"
            p="2.5"
            fontSize="xs"
            color="#ADADAD"
          >
            <RateIcon boxSize="44px" mr="2" />
            <Box>
              <Box>胜率</Box>
              <Box fontSize="xl" fontWeight="semibold" color="white">
                {guessStat?.winRate || 0}%
              </Box>
            </Box>
          </Flex>
          <Flex
            w="100%"
            h="16"
            bg="#2F2F2F"
            rounded="md"
            p="2.5"
            fontSize="xs"
            color="#ADADAD"
          >
            <NumberIcon boxSize="44px" mr="2" />
            <Box>
              <Box>盈/亏/平</Box>
              <Box fontSize="xl" fontWeight="semibold" color="white">
                {guessStat?.profitCount}/{guessStat?.lossCount}/
                {guessStat?.drawCount}
              </Box>
            </Box>
          </Flex>
        </Grid>
        <Flex
          w="100%"
          h="16"
          bg="#2F2F2F"
          rounded="md"
          mt="3"
          fontSize="xs"
          color="#ADADAD"
          justifyContent="space-between"
          overflow="hidden"
        >
          <Flex p="2.5">
            <TotalIcon boxSize="44px" mr="2" />
            <Box>
              <Box>累计盈亏</Box>
              <Box fontSize="xl" fontWeight="semibold" color="white">
                {guessStat?.amount}
              </Box>
            </Box>
          </Flex>
          <Popover
            placement="bottom-end"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          >
            <PopoverTrigger>
              <Flex
                bg="#404040"
                h="full"
                px="4"
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar name="coin" src={coin?.logo} boxSize="5" mb="0.5" />
                <Box fontSize="xs" color="white">
                  {coin?.coin}
                </Box>
                <ArrowDownIcon color="#F95625" boxSize="3" />
              </Flex>
            </PopoverTrigger>
            <PopoverContent
              bg="#404040"
              borderColor="#404040"
              w="max-content"
              fontSize="xs"
              fontWeight="semibold"
            >
              <PopoverArrow bg="#404040" shadowColor="#404040" />
              {coinList?.map((item, index) => (
                <Flex
                  key={item.coin}
                  h="10"
                  borderBottom={index === 0 ? "1px solid #1d1d1d" : ""}
                  alignItems="center"
                  px="2.5"
                  onClick={() => {
                    setCoin(item);
                    onClose();
                  }}
                >
                  <Image src={item?.logo} boxSize="4" mr="2.5" alt="" />
                  {item?.coin}
                </Flex>
              ))}
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
      <Box mx="4" mt="4">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab
              color="#777885"
              fontWeight="bold"
              _selected={{ color: "white" }}
              px="0"
              mr="3"
            >
              进行中
            </Tab>
            <Tab
              color="#777885"
              fontWeight="bold"
              _selected={{ color: "white" }}
              px="0"
            >
              已结束
            </Tab>
          </TabList>
          <TabIndicator mt="-1" height="2px" bg="#F95625" />
          <TabPanels>
            <TabPanel px="0">
              <ProcessList
                status={["betting", "process"]}
                gameList={gameList}
                sortList={[
                  {
                    field: "status",
                    type: "asc",
                  },
                  {
                    field: "dueTime",
                    type: "asc",
                  },
                ]}
              />
            </TabPanel>
            <TabPanel px="0">
              <ProcessList
                status={["settlement", "completed"]}
                gameList={gameList}
                sortList={[
                  {
                    field: "status",
                    type: "asc",
                  },
                  {
                    field: "dueTime",
                    type: "asc",
                  },
                ]}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}
