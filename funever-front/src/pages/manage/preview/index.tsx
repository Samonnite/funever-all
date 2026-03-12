import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocalStorageState, useLockFn } from "ahooks";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { apiGuessSubmit } from "api";
import Confirm from "components/Confirm";
import Header from "components/Header";

export default function RootLayout() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [previewGuess, setPreviewGuess] =
    useLocalStorageState<any>("preview-guess");
  const { preview, form } = previewGuess;

  const handleConfirm = useLockFn(async () => {
    await apiGuessSubmit(form);
    setPreviewGuess(undefined);
    navigate("/manage/preview/success", { replace: true });
  });

  return (
    <Flex flex="1" direction="column">
      <Header title="预览" />
      <Box m="4" color="white">
        <Box px="4" py="6" mb="4" rounded="base" bg="#2F2F2F">
          <Flex justifyContent="center" alignItems="center">
            <Image
              width="12"
              height="12"
              src={preview.teamA.image}
              alt="home"
              rounded="full"
            />
            <Box
              color="white"
              fontSize="21px"
              fontWeight="semibold"
              px="10"
              fontStyle="italic"
            >
              VS
            </Box>
            <Image
              width="12"
              height="12"
              src={preview.teamB.image}
              alt="home"
              rounded="full"
            />
          </Flex>
          <Flex justifyContent="center" alignItems="center" pt="3" gap="5">
            <Button
              fontWeight="bold"
              fontStyle="italic"
              bg="#3086E9"
              flex="1"
              color="white"
              rounded="full"
              sx={{
                "&::after": {
                  position: "absolute",
                  content: "''",
                  right: "-8px",
                  width: "40px",
                  height: "100%",
                  borderRadius: "4px",
                  transform: "skewX(-28deg)",
                  background: "#3086E9",
                  zIndex: "0",
                },
              }}
              pointerEvents="none"
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
                {preview.teamA.label}
              </Text>
            </Button>
            <Button
              fontWeight="bold"
              fontStyle="italic"
              bg="#EA4A4B"
              colorScheme="red"
              flex="1"
              color="white"
              rounded="full"
              sx={{
                "&::after": {
                  position: "absolute",
                  content: "''",
                  left: "-8px",
                  width: "40px",
                  height: "100%",
                  borderRadius: "4px",
                  transform: "skewX(-28deg)",
                  background: "#EA4A4B",
                  zIndex: "0",
                },
              }}
              pointerEvents="none"
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
                {preview.teamB.label}
              </Text>
            </Button>
          </Flex>
        </Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">比赛游戏类型</Box>
          <Flex color="white" alignItems="center">
            <Image
              width="4"
              height="4"
              src={preview.game.image}
              alt="home"
              rounded="full"
              mr="3"
            />
            {preview.game.label}
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">比赛项目</Box>
          <Box color="white">{preview.contest.label}</Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">比赛开始</Box>
          <Box color="white">
            {dayjs(preview.startTimestamp).format("MM-DD HH:mm")}
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">竞猜截止</Box>
          <Box color="white">
            {dayjs(preview.dueTimestamp).format("MM-DD HH:mm")}
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">结算币种</Box>
          <Flex color="white" alignItems="center">
            <Image
              width="4"
              height="4"
              src={preview.coinItem.image}
              alt="home"
              rounded="full"
              mr="3"
            />
            {preview.coinItem.value}
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          h="9"
          fontSize="xs"
        >
          <Box color="#777885">最小竞猜金额</Box>
          <Box color="white">{preview.coinMin}</Box>
        </Flex>
        <Box fontSize="sm" pt="6">
          热议标题
        </Box>
        <Box fontSize="sm" px="4" py="4" my="4" rounded="base" bg="#2F2F2F">
          {preview.title}
        </Box>
        <Button
          colorScheme="orange"
          bg="#F95625"
          w="full"
          color="white"
          rounded="base"
          fontSize="md"
          size="lg"
          onClick={() => onOpen()}
        >
          发布
        </Button>
      </Box>
      <Confirm
        isOpen={isOpen}
        content={
          <Box>
            <Box>一旦提交将不可更改</Box>
            <Box color="#F95625" pt="4">
              确定发布？
            </Box>
          </Box>
        }
        onClose={onClose}
        handleConfirm={handleConfirm}
      />
    </Flex>
  );
}
