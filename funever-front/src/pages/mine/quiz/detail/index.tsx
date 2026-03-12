import {
  Box,
  Center,
  Code,
  Flex,
  Image,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useCountDown } from "ahooks";
import dayjs from "dayjs";
import numeral from "numeral";
import { useEffect, useMemo, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";

import { useLayoutContext } from "Layout";
import { gameGuessDetail, gameGuessTran } from "api";
import {
  GameGuessPage,
  GameGuessPageGuessStatus,
  UserGameGuessTran,
  UserGameGuessTranStatus,
} from "api/model";
import Header from "components/Header";
import {
  CheckCircleIcon,
  CopyIcon,
  DrawIcon,
  ErrorIcon,
  WaitIcon,
} from "components/Icons";
import Loading from "components/Loading";
import NoData from "components/NoData";
import usePage from "hooks/usePaga";

const guessStatusText = (guessStatus?: GameGuessPageGuessStatus) => {
  if (guessStatus === "win") {
    return (
      <>
        <CheckCircleIcon boxSize="4" mr="3" />
        竞猜成功
      </>
    );
  }
  if (guessStatus === "loss") {
    return (
      <>
        <ErrorIcon boxSize="4" mr="3" />
        竞猜失败
      </>
    );
  }
  if (guessStatus === "draw") {
    return (
      <>
        <DrawIcon boxSize="4" mr="3" />
        竞猜平局
      </>
    );
  }
  return (
    <>
      <WaitIcon boxSize="4" mr="3" />
      待确认
    </>
  );
};

export default function RootLayout() {
  const { config } = useLayoutContext();
  const toast = useToast();
  const { id } = useParams();
  const [detail, setDetail] = useState<GameGuessPage>();
  const [countdown, formattedRes] = useCountDown({
    targetDate: Number(detail?.dueTime),
  });
  const { days, hours, minutes, seconds } = formattedRes;

  const transferStatus = (status?: string) => {
    if (status === UserGameGuessTranStatus.scuess) {
      return {
        text: "成功",
        color: "#04B360",
      };
    }
    if (status === UserGameGuessTranStatus.fail) {
      return {
        text: "失败",
        color: "#EA4A4B",
      };
    }
    return {
      text: "等待",
      color: "#A5A5A5",
    };
  };

  const isEnd = useMemo(() => {
    return (
      detail?.status === "settlement" ||
      detail?.status === "completed" ||
      countdown === 0
    );
  }, [detail, countdown]);

  const guessTeamLogo = useMemo(() => {
    return detail?.ateam?.teamName === detail?.guessTeam
      ? detail?.ateam?.teamLogo
      : detail?.bteam?.teamLogo;
  }, [detail]);

  const pointText = useMemo(() => {
    if (detail?.status === "completed" || detail?.status === "settlement") {
      return `${detail?.ateam?.teamWin} : ${detail?.bteam?.teamWin}`;
    }
    if (countdown === 0) return "等待结果";
    return "VS";
  }, [detail, countdown]);

  const guessProfit = useMemo(() => {
    if (detail?.guessStatus === "wait") {
      return {
        text: "--",
        coin: "",
        color: "#fff",
      };
    }
    if (detail?.guessStatus === "win") {
      return {
        text: numeral(detail?.guessProfit).format("0,0[.][000000]"),
        coin: detail?.coin,
        color: "#EA4A4B",
      };
    }
    if (detail?.guessStatus === "draw") {
      return {
        text: numeral(detail?.guessProfit).format("0,0[.][000000]"),
        coin: detail?.coin,
        color: "#fff",
      };
    }
    return {
      text: numeral(detail?.guessProfit).format("0,0[.][000000]"),
      coin: detail?.coin,
      color: "#04B360",
    };
  }, [detail]);

  const getDetail = async () => {
    const res = await gameGuessDetail({ guessId: id as any });
    setDetail(res?.data);
  };

  const { loading, list } = usePage<UserGameGuessTran>(gameGuessTran, {
    guessId: id,
    pageSize: undefined,
    pageNum: undefined,
    sortList: undefined,
  });

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex flex="1" direction="column" pb="4">
      <Header title={detail?.game} />
      <Box mx="4">
        <Tag w="full" bg="rgba(249, 86, 37, 0.1)" color="#F95625" fontSize="xs">
          {detail?.contest}
        </Tag>
        <Box
          rounded="md"
          bg="#2F2F2F"
          overflow="hidden"
          mt="2"
          p="3"
          pb="2"
          mb="4"
          color="white"
        >
          <Flex justifyContent="center">
            <Flex
              textAlign="center"
              alignItems="center"
              direction="column"
              minW="16"
            >
              <Image
                width="12"
                height="12"
                src={detail?.ateam?.teamLogo}
                alt="home"
                rounded="full"
                fallbackSrc="/images/default-logo.png"
                bg="#000"
              />
              <Box pt="2.5" fontSize="xs" fontWeight="semibold">
                {detail?.ateam?.teamName}
              </Box>
            </Flex>
            <Box
              fontSize="md"
              fontWeight="semibold"
              px="10"
              fontStyle="italic"
              pt="3"
            >
              {pointText}
            </Box>
            <Flex
              textAlign="center"
              alignItems="center"
              direction="column"
              minW="16"
            >
              <Image
                width="12"
                height="12"
                src={detail?.bteam?.teamLogo}
                alt="home"
                rounded="full"
                fallbackSrc="/images/default-logo.png"
                bg="#000"
              />
              <Box pt="2.5" fontSize="xs" fontWeight="semibold">
                {detail?.bteam?.teamName}
              </Box>
            </Flex>
          </Flex>
          <Center pt="3">
            <Code
              color={countdown > 0 ? "#EA4A4B" : "#A5A5A5"}
              bg="transparent"
              fontWeight="bold"
              fontSize="md"
            >
              {days > 0 && (days > 9 ? `${days}d:` : `0${days}d:`)}
              {hours > 9 ? hours : `0${hours}`}h:
              {minutes > 9 ? minutes : `0${minutes}`}m:
              {seconds > 9 ? seconds : `0${seconds}`}s
            </Code>
          </Center>
        </Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">投注ID</Box>
          <Box color="white">{detail?.guessId}</Box>
        </Flex>
        {isEnd && !loading && (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #2F2F2F"
            h="9"
            fontSize="xs"
          >
            <Box color="#777885">竞猜状态</Box>
            <Flex color="white" alignItems="center">
              {guessStatusText(detail?.guessStatus)}
            </Flex>
          </Flex>
        )}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">投注金额</Box>
          <Box color="white">
            {numeral(detail?.guessStake).format("0,0[.][000000]")}
            {detail?.coin}
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">投注战队</Box>
          <Flex color="white" alignItems="center">
            <Image
              width="4"
              height="4"
              src={guessTeamLogo}
              alt=""
              rounded="full"
              mr="3"
            />
            {detail?.guessTeam}
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">比赛日期</Box>
          <Box color="white">
            {detail?.startTime
              ? dayjs(Number(detail?.startTime)).format("MM-DD HH:mm")
              : "--"}
          </Box>
        </Flex>
        {isEnd && !loading && (
          <>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #2F2F2F"
              h="9"
              fontSize="xs"
            >
              <Box color="#777885">投注时间</Box>
              <Box color="white">
                {detail?.dueTime
                  ? dayjs(Number(detail?.createTime)).format("MM-DD HH:mm")
                  : "--"}
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #2F2F2F"
              h="9"
              fontSize="xs"
            >
              <Box color="#777885">结算时间</Box>
              <Box color="white">
                {detail?.guessCloseTime
                  ? dayjs(Number(detail?.guessCloseTime)).format("MM-DD HH:mm")
                  : "--"}
              </Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              h="9"
              fontSize="xs"
            >
              <Box color="#777885">结算金额</Box>
              <Box color={guessProfit.color}>
                {guessProfit.text}
                {guessProfit?.coin}
              </Box>
            </Flex>
          </>
        )}
      </Box>
      <Box h="1" bg="#2F2F2F" w="full" mt="1"></Box>
      {loading ? (
        <Loading />
      ) : !list.length ? (
        <NoData />
      ) : (
        list.map((item, index) => {
          return (
            <Box
              key={index}
              rounded="md"
              bg="#2F2F2F"
              overflow="hidden"
              mt="3"
              mx="2"
              px="2"
              color="white"
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                h="9"
                fontSize="xs"
              >
                <Box color="white">
                  {item?.type === "betting" ? "押注" : "结算"}
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                h="9"
                fontSize="xs"
              >
                <Box color="#777885">数量</Box>
                <Box color="#F95625" fontWeight="semibold">
                  {numeral(item?.qty).format("0,0[.][000000]")}
                  {item?.coin}
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                h="9"
                fontSize="xs"
              >
                <Box color="#777885">哈希值</Box>
                <Flex
                  color="white"
                  alignItems="center"
                  textDecoration="underline"
                >
                  <Text
                    onClick={() => {
                      window.location.href = `${config?.solscan}/tx/${item?.hash}`;
                    }}
                  >
                    {item?.hash?.slice(0, 8) + "..." + item?.hash?.slice(-8)}
                  </Text>
                  <CopyToClipboard
                    text={`${config?.solscan}/tx/${item?.hash}`}
                    onCopy={() =>
                      toast({
                        description: "复制成功",
                        duration: 2000,
                      })
                    }
                  >
                    <CopyIcon boxSize="4" ml="3" />
                  </CopyToClipboard>
                </Flex>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                h="9"
                fontSize="xs"
              >
                <Box color="#777885">状态</Box>
                <Box color={transferStatus(item?.status).color}>
                  {transferStatus(item?.status).text}
                </Box>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                h="9"
                fontSize="xs"
              >
                <Box color="#777885">交易时间</Box>
                <Box color="white">
                  {dayjs(Number(item?.createTime)).format("MM-DD HH:mm")}
                </Box>
              </Flex>
            </Box>
          );
        })
      )}
    </Flex>
  );
}
