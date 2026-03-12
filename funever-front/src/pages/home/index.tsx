import {
  Box,
  Link,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import QueryList from "../quiz/components/QueryList";
import QuizCard from "../quiz/components/QuizCard";

import { apiGameQuery, apiGuessQuery } from "api";
import {
  ApiGamePage,
  ApiGuessPage,
  ApiGuessQueryStatusItem,
  PageSort,
} from "api/model";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

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
  const { loading, list, reset } = usePage<ApiGuessPage>(apiGuessQuery, {
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
              to={`/quiz/${item.id}`}
              textDecoration="none"
              _hover={{
                textDecoration: "none",
              }}
            >
              <QuizCard item={item} />
            </Link>
          );
        })
      )}
    </>
  );
};

export default function Home() {
  const defaultGames: ApiGamePage[] = [
    {
      name: "All",
      id: undefined,
      mates: undefined,
    },
  ];
  const [gameList, setGameList] = useState<ApiGamePage[]>();

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
    getGameList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box pb="10">
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
  );
}
