import {
  Box,
  Button,
  Code,
  Flex,
  Image,
  Tag,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCountDown } from "ahooks";
import dayjs from "dayjs";
import numeral from "numeral";
import { useMemo } from "react";

import { GameGuessPage } from "api/model";
import { PointIcon, QuestionIcon } from "components/Icons";
import { useWalletMask } from "components/wallet";
import Transfer from "components/wallet/transfer";

const ResultLogo = ({ item }: { item: GameGuessPage }) => {
  if (item?.guessStatus === "win") {
    return (
      <Image
        width="100px"
        height="74px"
        src={`/images/win.png`}
        alt="home"
        position="absolute"
        right="2"
        rounded="full"
        zIndex={1}
      />
    );
  }
  if (item?.guessStatus === "loss") {
    return (
      <Image
        width="100px"
        height="74px"
        src={`/images/lose.png`}
        alt="home"
        position="absolute"
        right="2"
        rounded="full"
        zIndex={1}
      />
    );
  }
  if (item?.guessStatus === "draw") {
    return (
      <Image
        width="100px"
        height="74px"
        src={`/images/draw.png`}
        alt="home"
        position="absolute"
        right="2"
        rounded="full"
        zIndex={1}
      />
    );
  }
  return <></>;
};

const ResultButton = ({ item, countdown, handleTransform }: any) => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const isEnd = useMemo(() => {
    return (
      item?.status === "settlement" ||
      item?.status === "completed" ||
      countdown === 0
    );
  }, [item, countdown]);

  if (!isEnd) {
    return (
      <Button
        size="xs"
        colorScheme="orange"
        bg="#F95625"
        color="white"
        px="5"
        onClick={(e) => handleTransform(e)}
      >
        追加投注
      </Button>
    );
  }
  if (item?.guessStatus === "wait") {
    return (
      <Flex
        px="5"
        rounded="sm"
        color="#F95625"
        bg="rgba(249, 86, 37, 0.2)"
        fontSize="xs"
        alignItems="center"
        justifyContent="center"
      >
        结算中...
      </Flex>
    );
  }
  if (item?.guessStatus === "win") {
    return (
      <Flex
        px="5"
        rounded="sm"
        color="#EA4A4B"
        bg="rgba(234, 74, 75, 0.2)"
        fontSize="xs"
        alignItems="center"
        justifyContent="center"
      >
        {numeral(item?.guessProfit).format("0,0[.][000000]")}
      </Flex>
    );
  }
  if (item?.guessStatus === "loss") {
    return (
      <Flex
        px="5"
        rounded="sm"
        color="#04B360"
        bg="rgba(4, 179, 96, 0.2)"
        fontSize="xs"
        alignItems="center"
        justifyContent="center"
      >
        {numeral(item?.guessProfit).format("0,0[.][000000]")}
      </Flex>
    );
  }

  if (item?.guessStatus === "draw") {
    return (
      <Tooltip
        placement="top"
        hasArrow
        fontSize="xs"
        rounded="base"
        bg="rgba(0, 0, 0, 0.8)"
        label={`扣除系统手续费${item?.fee}U`}
        isOpen={isOpen}
      >
        <Flex
          px="5"
          rounded="sm"
          color="white"
          bg="rgba(119, 120, 133, 0.2)"
          fontSize="xs"
          alignItems="center"
          justifyContent="center"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggle();
          }}
        >
          {numeral(item?.guessProfit).format("0,0[.][000000]")}

          <QuestionIcon display="block" boxSize="3.5" ml="2.5" />
        </Flex>
      </Tooltip>
    );
  }

  return <></>;
};

const QuizCard = ({ item, onRefresh }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { connected } = useWallet();
  const { onOpen: onOpenWallet } = useWalletMask();
  const [countdown, formattedRes] = useCountDown({
    targetDate: Number(item?.dueTime),
  });
  const { days, hours, minutes, seconds } = formattedRes;

  const isDraw = useMemo(() => {
    return item?.guessStatus === "draw";
  }, [item]);

  const [ateamWidth, bteamWidth] = useMemo(() => {
    const all = item?.ateam?.teamAmount + item?.bteam?.teamAmount;
    if (!all) return ["1%", "1%"];
    return [
      `${(item?.bteam?.teamAmount / all) * 100}%`,
      `${(item?.ateam?.teamAmount / all) * 100}%`,
    ];
  }, [item]);

  const handleTransform = (e: any) => {
    e.preventDefault();
    onOpen();
    if (connected) {
      onOpen();
    } else {
      onOpenWallet();
    }
  };

  const guessTeamLogo = useMemo(() => {
    return item?.ateam?.teamName === item?.guessTeam
      ? item?.ateam?.teamLogo
      : item?.bteam?.teamLogo;
  }, [item]);

  const teamId = useMemo(() => {
    return item?.ateam?.teamName === item?.guessTeam
      ? item?.ateam?.team
      : item?.bteam?.team;
  }, [item]);

  return (
    <Box
      rounded="base"
      bg="#2F2F2F"
      overflow="hidden"
      position="relative"
      mt="4"
      p="3"
      sx={{
        "&::before": {
          content: '" "',
          position: "absolute",
          left: 0,
          top: "69px",
          width: 3,
          height: 6,
          bg: "#1D1D1D",
          borderRadius: "0 100px 100px 0",
        },
        "&::after": {
          content: '" "',
          position: "absolute",
          right: 0,
          top: "69px",
          width: 3,
          height: 6,
          bg: "#1D1D1D",
          borderRadius: "100px 0 0 100px",
        },
      }}
    >
      <Flex justifyContent="space-between" mb="2">
        <Flex alignItems="center">
          <Image
            width="6"
            height="6"
            src={item?.gameLogo}
            alt="home"
            rounded="full"
          />
          <Box color="white" fontSize="xs" fontWeight="semibold" pl="3">
            {item.game}
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Code
          color={countdown > 0 ? "#EA4A4B" : "#A5A5A5"}
          bg="transparent"
          fontWeight="bold"
          fontSize="xs"
        >
          {days > 0 && (days > 9 ? `${days}d:` : `0${days}d:`)}
          {hours > 9 ? hours : `0${hours}`}h:
          {minutes > 9 ? minutes : `0${minutes}`}m:
          {seconds > 9 ? seconds : `0${seconds}`}s
        </Code>
        <Flex>
          <Image rounded="full" alt="coin" src={item?.coinLogo} boxSize="4" />
        </Flex>
      </Flex>
      <Box color="#A5A5A5" fontSize="9px" px="1" pb="0.5">
        ID: {item?.guessId}
      </Box>
      <Flex
        alignItems="center"
        borderBottom="1px dashed #777885"
        pb="1.5"
        px="1"
        color="#A5A5A5"
        fontSize="8px"
      >
        <Box>
          比赛开始:{" "}
          {item?.startTime
            ? dayjs(Number(item?.startTime)).format("MM-DD HH:mm")
            : "--"}
        </Box>
        <Box pl="4">
          竞猜截止:{" "}
          {item?.dueTime
            ? dayjs(Number(item?.dueTime)).format("MM-DD HH:mm")
            : "--"}
        </Box>
      </Flex>
      <Flex alignItems="center" py="2">
        <Image
          width="100px"
          height="100px"
          src={guessTeamLogo}
          alt="home"
          position="absolute"
          right="2"
          rounded="full"
          filter="grayscale(1) opacity(0.2)"
        />
        <ResultLogo item={item} />
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Image
            width="8"
            height="8"
            src={item?.ateam?.teamLogo}
            alt="home"
            rounded="full"
            fallbackSrc="/images/default-logo.png"
            bg="#000"
          />
          <Box
            color="white"
            fontSize="10px"
            fontWeight="600"
            py="2"
            fontStyle="italic"
          >
            VS
          </Box>
          <Image
            width="8"
            height="8"
            src={item?.bteam?.teamLogo}
            alt="home"
            rounded="full"
            fallbackSrc="/images/default-logo.png"
            bg="#000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          direction="column"
          pl="2"
          color="white"
          position="relative"
        >
          <Flex fontSize="2xs" h="6" alignItems="center">
            <Box
              w={ateamWidth}
              h="2"
              bg={isDraw ? "#777885" : "#3086E9"}
              rounded="full"
            ></Box>
            <Box ml="2" whiteSpace="nowrap">
              {!isDraw && "瓜分"}{" "}
              {numeral(item?.bteam?.teamAmount).format("0,0[.][000000]")}
            </Box>
          </Flex>
          <Flex fontSize="2xs" color="#A5A5A5" py="3">
            {numeral(item?.ateam?.teamCount + item?.bteam?.teamCount).format(
              "0,0"
            )}{" "}
            人参加，投注总额:{" "}
            <Text color="#F95625" fontWeight="semibold" pl="1.5">
              {numeral(
                item?.ateam?.teamAmount + item?.bteam?.teamAmount
              ).format("0,0[.][000000]")}
            </Text>
          </Flex>
          <Flex fontSize="2xs" h="6" alignItems="center">
            <Box
              w={bteamWidth}
              h="2"
              bg={isDraw ? "#777885" : "#EA4A4B"}
              rounded="full"
            ></Box>
            <Box ml="2" whiteSpace="nowrap">
              {!isDraw && "瓜分"}{" "}
              {numeral(item?.ateam?.teamAmount).format("0,0[.][000000]")}
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" pt="1">
        <Flex fontSize="xs">
          <Tag size="sm" bg="rgba(249, 86, 37, 0.1)" color="#F95625" mr="3">
            选择: {item?.guessTeam}
          </Tag>
          <Flex fontWeight="semibold" color="white" alignItems="center">
            <PointIcon boxSize="4" pr="1" />
            {item?.guessStake}
          </Flex>
        </Flex>
        <ResultButton
          item={item}
          handleTransform={handleTransform}
          countdown={countdown}
        />
      </Flex>
      {isOpen && (
        <Transfer
          isOpen={isOpen}
          onClose={onClose}
          team={teamId}
          gsid={item?.gameGuessId}
          coin={item?.coin}
          coinMin={item?.coinMin}
          onSuccess={() => onRefresh?.()}
        />
      )}
    </Box>
  );
};

export default QuizCard;
