import { Box, Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect } from "react";

import { userNoticeMark, userNoticeQuery } from "api";
import { UserNotice } from "api/model";
import Header from "components/Header";
import { NoticeIcon } from "components/Icons";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function RootLayout() {
  const { loading, list } = usePage<UserNotice>(userNoticeQuery);

  const markNotice = async () => {
    await userNoticeMark([]);
  };

  useEffect(() => {
    if (list.length) {
      markNotice();
    }
  }, [list]);

  return (
    <Flex flex="1" direction="column">
      <Header title="消息中心" />
      <Box mx="4" color="white">
        {loading ? (
          <Loading />
        ) : !list.length ? (
          <NoData />
        ) : (
          list.map((item, index) => (
            <Flex key={index} py="3" borderBottom="0.5px solid #2F2F2F">
              <NoticeIcon boxSize="22px" />
              <Box ml="4">
                <Box fontSize="sm">{item.topic}</Box>
                <Box fontSize="xs" py="2" color="#777885">
                  {item.content}
                </Box>
                <Box fontSize="xs" color="#777885">
                  {dayjs(Number(item?.createTime)).format("YYYY-MM-DD HH:mm")}
                </Box>
              </Box>
            </Flex>
          ))
        )}
      </Box>
    </Flex>
  );
}
