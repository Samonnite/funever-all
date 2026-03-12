import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuizCard from "../components/QuizCard";

import RemarkInput from "./input";

import { apiGuessDetail, guessCommentQuery } from "api";
import { ApiGuessCommentPage, ApiGuessPage } from "api/model";
import Header from "components/Header";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function RootLayout() {
  const { id } = useParams();
  const [detail, setDetail] = useState<ApiGuessPage>();
  const { loading, list, total, reset } = usePage<ApiGuessCommentPage>(
    guessCommentQuery,
    {
      gsid: id as any,
    }
  );

  const getGuessDetail = async () => {
    const res = await apiGuessDetail({ id: id as any });
    setDetail(res.data);
  };

  useEffect(() => {
    getGuessDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="4">
      <Header title="详情页" sx={{ px: 0 }} />
      <QuizCard item={detail} />
      <Box color="white" fontSize="sm" pt="6">
        <Box>热议</Box>
        <Box rounded="base" bg="#2F2F2F" overflow="hidden" mt="4" p="3" mb="24">
          <Box pb="4">{detail?.title}</Box>
          <Box color="#A5A5A5" fontSize="2xs" py="2">
            {numeral(total).format("0,0")} 人已参与
          </Box>
          {loading ? (
            <Loading />
          ) : !list.length ? (
            <Box mt="-24" mb="24">
              <NoData />
            </Box>
          ) : (
            list.map((item, index) => (
              <Box key={index} borderTop="0.5px solid #404040" pt="3" pb="4">
                <Flex alignItems="flex-start">
                  <Avatar src={item?.fromLogo} boxSize="6" mr="2" />
                  <Box flex="1">
                    <Box as={"span"}>
                      <Text color="#3086E9" pr="2" as={"span"}>
                        {item?.fromName}:
                      </Text>
                      <Text as={"span"}>{item?.remark}</Text>
                    </Box>
                    <Box color="#A5A5A5" fontSize="xs" pt="2">
                      {dayjs(Number(item?.createTime)).format(
                        "YYYY-MM-DD HH:mm"
                      )}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ))
          )}
        </Box>
      </Box>
      <RemarkInput gsid={id as any} reset={reset} />
    </Box>
  );
}
