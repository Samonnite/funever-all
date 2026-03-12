import {
  Box,
  Button,
  Center,
  Code,
  Flex,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCountDown } from "ahooks";
import dayjs from "dayjs";
import numeral from "numeral";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiGuessDelete } from "api";
import Confirm from "components/Confirm";
import {
  DeleteIcon,
  EditIcon,
  MoreIcon,
  RightIcon,
  Share2Icon,
} from "components/Icons";
import Share from "components/share";
import { useWalletMask } from "components/wallet";
import Transfer from "components/wallet/transfer";

const QuizCard = ({ item, share = true, isManage = false, onRefresh }: any) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { connected } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onOpen: onOpenWallet } = useWalletMask();
  const [teamId, setTeamId] = useState<number>(0);
  const {
    isOpen: isOpenShare,
    onOpen: onOpenShare,
    onClose: onCloseShare,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
    isOpen: isOpenEdit,
  } = useDisclosure();

  const [countdown, formattedRes] = useCountDown({
    targetDate: Number(item?.dueTime),
  });
  const { days, hours, minutes, seconds } = formattedRes;

  const [ateamWidth, bteamWidth] = useMemo(() => {
    const all = item?.ateam?.teamAmount + item?.bteam?.teamAmount;
    if (!all) return ["50%", "50%"];
    return [
      `${(item?.bteam?.teamAmount / all) * 100}%`,
      `${(item?.ateam?.teamAmount / all) * 100}%`,
    ];
  }, [item]);

  const isEnd = useMemo(() => {
    return (
      item?.status === "settlement" ||
      item?.status === "completed" ||
      countdown === 0
    );
  }, [item, countdown]);

  const isDraw = useMemo(() => {
    return (
      (item?.status === "settlement" || item?.status === "completed") &&
      item?.ateam?.teamWin === item?.bteam?.teamWin
    );
  }, [item]);

  const [ateamColor, bteamColor] = useMemo(() => {
    return isEnd || isDraw ? ["#A5A5A5", "#A5A5A5"] : ["#3086E9", "#EA4A4B"];
  }, [isEnd, isDraw]);

  const pointText = useMemo(() => {
    if (item?.status === "completed" || item?.status === "settlement") {
      return `${item?.ateam?.teamWin} : ${item?.bteam?.teamWin}`;
    }
    if (countdown === 0) return "等待结果";
    return "VS";
  }, [item, countdown]);

  const handleTransform = (e: any, id: number) => {
    if (isManage || isEnd) return;
    e.preventDefault();
    if (connected) {
      setTeamId(id);
      onOpen();
    } else {
      onOpenWallet();
    }
  };

  const handleConfirm = async () => {
    await apiGuessDelete({ id: item?.id as any });
    toast({
      description: "删除成功",
      duration: 2000,
    });
    onRefresh();
  };

  const handleShare = (e: any) => {
    e.preventDefault();
    onOpenShare();
  };

  const handleUser = (e: any) => {
    e.preventDefault();
    navigate(`/quiz/user/${item?.id}`);
  };

  return (
    <Box
      rounded="base"
      bg="#2F2F2F"
      overflow="hidden"
      mt="4"
      p="3"
      position="relative"
    >
      <Box
        bg="#F95625"
        borderBottomEndRadius="10px"
        fontSize="2xs"
        position="absolute"
        top="0"
        left="0"
        px="1.5"
        color="#fff"
      >
        #{item?.id}
      </Box>
      <Flex justifyContent="space-between" mb="3" pt="3" position="relative">
        <Flex>
          <Image
            width="6"
            height="6"
            src={item?.gameLogo}
            alt="game"
            rounded="full"
          />
          <Box color="white" fontSize="16" fontWeight="700" pl="2">
            {item?.game}
          </Box>
        </Flex>
        {item?.join && (
          <Tag
            rounded="10px"
            fontSize="10px"
            bg="rgba(48, 134, 233, 0.2)"
            minHeight="18px"
            h="18px"
            px="10px"
            color="#3086E9"
          >
            已参加
          </Tag>
        )}
        {isManage && (
          <Popover
            placement="bottom-end"
            isOpen={isOpenEdit}
            onOpen={onOpenEdit}
            onClose={onCloseEdit}
          >
            <PopoverTrigger>
              <Box>
                <MoreIcon boxSize="6" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              bg="#404040"
              borderColor="#404040"
              w="max-content"
              fontSize="xs"
              fontWeight="semibold"
            >
              <Flex
                h="10"
                alignItems="center"
                px="2.5"
                onClick={() => {
                  navigate(`/manage/edit/${item?.id}`);
                  onCloseEdit();
                }}
              >
                <EditIcon boxSize="6" mr="2.5" />
                <Text color="white" fontSize="sm">
                  修改
                </Text>
              </Flex>
              {item?.ateam?.teamCount + item?.bteam?.teamCount === 0 ? (
                <Flex
                  h="10"
                  borderTop="1px solid #777885"
                  alignItems="center"
                  px="2.5"
                  onClick={() => {
                    onOpenDelete();
                    onCloseEdit();
                  }}
                >
                  <DeleteIcon boxSize="6" mr="2.5" />
                  <Text color="#F95625" fontSize="sm">
                    删除
                  </Text>
                </Flex>
              ) : (
                <></>
              )}
            </PopoverContent>
          </Popover>
        )}
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px dashed #777885"
        pb="2"
      >
        <Box fontWeight="semibold" color="white" fontSize="12px">
          {item?.contest}
        </Box>
        <Flex>
          <Image rounded="full" alt="coin" src={item?.coinLogo} boxSize="6" />
          {share && (
            <Share2Icon boxSize="6" ml="3" onClick={(e) => handleShare(e)} />
          )}
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
      <Center color="#A5A5A5" fontSize="12" pb="1.5">
        {item?.dueTime
          ? dayjs(Number(item?.dueTime)).format("MM-DD HH:mm")
          : "--"}
      </Center>
      <Flex justifyContent="center" alignItems="center">
        <Image
          width="12"
          height="12"
          src={item?.ateam?.teamLogo}
          alt="ateam"
          rounded="full"
          fallbackSrc="/images/default-logo.png"
          bg="#000"
        />
        <Box
          color="white"
          fontSize={countdown > 0 ? "21px" : "sm"}
          fontWeight="semibold"
          px="10"
          fontStyle="italic"
        >
          {pointText}
        </Box>
        <Image
          width="12"
          height="12"
          src={item?.bteam?.teamLogo}
          alt="bteam"
          rounded="full"
          fallbackSrc="/images/default-logo.png"
          bg="#000"
        />
      </Flex>
      <Flex justifyContent="center" alignItems="center" pt="3" gap="5">
        <Button
          fontWeight="bold"
          fontStyle="italic"
          bg={ateamColor}
          flex="1"
          color="white"
          rounded="full"
          pr="1"
          onClick={(e) => handleTransform(e, item?.ateam?.team)}
          sx={{
            "&::after": {
              position: "absolute",
              content: "''",
              right: "-8px",
              width: "40px",
              height: "100%",
              borderRadius: "4px",
              transform: "skewX(-28deg)",
              background: ateamColor,
              zIndex: "0",
            },
          }}
          _active={{
            bg: ateamColor,
            borderColor: ateamColor,
          }}
          _hover={{
            bg: ateamColor,
            borderColor: ateamColor,
          }}
          _focus={{
            bg: ateamColor,
            borderColor: ateamColor,
          }}
        >
          <Text
            position="relative"
            whiteSpace="wrap"
            noOfLines={2}
            px="1.5"
            zIndex="2"
            fontSize="15px"
            lineHeight="18px"
          >
            {item?.ateam?.teamName}
          </Text>
        </Button>
        <Button
          fontWeight="bold"
          fontStyle="italic"
          bg={bteamColor}
          colorScheme="red"
          flex="1"
          color="white"
          rounded="full"
          pl="1"
          sx={{
            "&::after": {
              position: "absolute",
              content: "''",
              left: "-8px",
              width: "40px",
              height: "100%",
              borderRadius: "4px",
              transform: "skewX(-28deg)",
              background: bteamColor,
              zIndex: "0",
            },
          }}
          _active={{
            bg: bteamColor,
            borderColor: bteamColor,
          }}
          _hover={{
            bg: bteamColor,
            borderColor: bteamColor,
          }}
          _focus={{
            bg: bteamColor,
            borderColor: bteamColor,
          }}
          onClick={(e) => handleTransform(e, item?.bteam?.team)}
        >
          <Text
            position="relative"
            whiteSpace="wrap"
            noOfLines={2}
            px="1.5"
            zIndex="2"
            fontSize="15px"
            lineHeight="18px"
          >
            {item?.bteam?.teamName}
          </Text>
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center" pt="4" gap="2">
        {ateamWidth !== "0%" && (
          <Box
            bg={isDraw ? "#A5A5A5" : "#3086E9"}
            h="1.5"
            w={ateamWidth}
            rounded="full"
            position="relative"
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                right: "-3px",
                width: "10px",
                height: "100%",
                borderRadius: "2px",
                borderStartRadius: bteamWidth !== "0%" ? "full" : "2px",
                transform: bteamWidth !== "0%" ? "skewX(-28deg)" : "unset",
                background: isDraw ? "#A5A5A5" : "#3086E9",
                zIndex: "0",
              },
            }}
          ></Box>
        )}
        {bteamWidth !== "0%" && (
          <Box
            bg={isDraw ? "#A5A5A5" : "#EA4A4B"}
            h="1.5"
            w={bteamWidth}
            rounded="full"
            position="relative"
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                left: "-3px",
                width: "10px",
                height: "100%",
                borderRadius: "2px",
                borderEndRadius: ateamWidth !== "0%" ? "full" : "2px",
                transform: ateamWidth !== "0%" ? "skewX(-28deg)" : "unset",
                background: isDraw ? "#A5A5A5" : "#EA4A4B",
                zIndex: "0",
              },
            }}
          ></Box>
        )}
      </Flex>
      <Flex justifyContent="space-between" color="white" fontSize="10px" pt="1">
        <Box>
          {!isDraw && "瓜分"}{" "}
          {numeral(item?.bteam?.teamAmount).format("0,0[.][000000]")}
        </Box>
        <Box>
          {!isDraw && "瓜分"}{" "}
          {numeral(item?.ateam?.teamAmount).format("0,0[.][000000]")}
        </Box>
      </Flex>
      <Center color="#A5A5A5" fontSize="10px" onClick={handleUser}>
        {numeral(item?.ateam?.teamCount + item?.bteam?.teamCount).format("0,0")}{" "}
        人参加，投注总额:{" "}
        <Text
          color={isDraw ? "white" : "#F95625"}
          fontWeight="semibold"
          pl="1.5"
        >
          {numeral(item?.ateam?.teamAmount + item?.bteam?.teamAmount).format(
            "0,0[.][000000]"
          )}
        </Text>
        <RightIcon boxSize="3" ml="1.5" color="white" />
      </Center>
      {isOpen && (
        <Transfer
          isOpen={isOpen}
          onClose={onClose}
          team={teamId}
          gsid={item?.id}
          coin={item?.coin}
          coinMin={item?.coinMin}
          onSuccess={() => navigate("/mine/quiz")}
        />
      )}
      <Share isOpen={isOpenShare} onClose={onCloseShare} />
      <Confirm
        isOpen={isOpenDelete}
        content={
          <Box>
            <Box>是否删除？</Box>
          </Box>
        }
        onClose={onCloseDelete}
        handleConfirm={handleConfirm}
      />
    </Box>
  );
};

export default QuizCard;
