import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiGuessStakeDetail, queryApiGuessStakePage } from "api";
import { ApiGuessStakePage, ApiGuessStakeTotal } from "api/model";
import Header from "components/Header";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

export default function RootLayout() {
  const { id } = useParams();
  const [detail, setDetail] = useState<ApiGuessStakeTotal>();
  const { loading, list } = usePage<ApiGuessStakePage>(queryApiGuessStakePage, {
    gsid: id as any,
  });

  const getGuessDetail = async () => {
    const res = await apiGuessStakeDetail({ gsid: id as any });
    setDetail(res.data);
  };

  useEffect(() => {
    getGuessDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="4">
      <Header title="下注详情" sx={{ px: 0 }} />
      <Box color="white" fontSize="sm" pt="6">
        <Flex fontSize="13px">
          <Box
            rounded="md"
            mr="1.5"
            bg="#2F2F2F"
            py="3"
            flex="1"
            textAlign="center"
          >
            <Box>{numeral(detail?.userCount).format("0,0")}</Box>
            <Box color="#777885" pt="2.5">
              参加人数
            </Box>
          </Box>
          <Box
            flex="1"
            rounded="md"
            ml="1.5"
            bg="linear-gradient(180deg, #F95625 0%, #933316 100%);"
            py="3"
            textAlign="center"
          >
            <Box>{numeral(detail?.userAmount).format("0,0[.][000000]")}</Box>
            <Box pt="2.5">投注总额</Box>
          </Box>
        </Flex>
        <Box borderBottom="2px solid #F95625" pt="6" display="inline-block">
          详情
        </Box>
        <Box mt="3" color="white" fontSize="11px">
          <TableContainer>
            <Table
              variant="unstyled"
              size="sm"
              sx={{
                borderSpacing: "0",
                borderRadius: "4px",
                borderCollapse: "separate",
                border: "1px solid #777885",
                td: {
                  textAlign: "center",
                },
              }}
            >
              <Tbody border="1px solid #777885">
                <Tr bg={"#2F2F2F"} h="9" color="#777885">
                  <Td borderLeftRadius="base" borderRight="1px solid">
                    钱包地址
                  </Td>
                  <Td borderRight="1px solid">投注金额</Td>
                  <Td borderRightRadius="base">押注队伍</Td>
                </Tr>
                {loading ? (
                  <Tr>
                    <Td colSpan={3}>
                      <Box mb="10">
                        <Loading />
                      </Box>
                    </Td>
                  </Tr>
                ) : !list.length ? (
                  <Tr>
                    <Td colSpan={3}>
                      <Box mt="-20" mb="10">
                        <NoData />
                      </Box>
                    </Td>
                  </Tr>
                ) : (
                  list.map((item, index) => (
                    <Tr key={index} bg={index % 2 !== 0 ? "#2F2F2F" : ""} h={8}>
                      <Td
                        borderLeftRadius="base"
                        borderRight="1px solid #777885"
                      >
                        {item?.addr}
                      </Td>
                      <Td borderRight="1px solid #777885">
                        {item?.stake} {item?.coin}
                      </Td>
                      <Td borderRightRadius="base">{item?.teamName}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
