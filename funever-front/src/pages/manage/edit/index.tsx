import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useLocalStorageState } from "ahooks";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CoinSelect from "./CoinSelect";
import DatePicker from "./DatePicker";
import QuizSelect from "./select";

import {
  apiGameQuery,
  apiGuessDetail,
  apiTeamPageQuery,
  gameContestPageList,
  getBlockCoinList,
} from "api";
import { ApiGuessPage, ApiGuessSubmit } from "api/model";
import Header from "components/Header";
import { PicIcon } from "components/Icons";
import useResize from "hooks/useResize";

export type SelectType = {
  label?: string;
  value?: string | number;
  image?: string;
};

function validate<T>(obj: T, requiredFields: (keyof T)[]): keyof T | boolean {
  const missingFields: (keyof T)[] = [];

  requiredFields.forEach((field) => {
    if (!Object.prototype.hasOwnProperty.call(obj, field)) {
      missingFields.push(field);
    }
  });

  if (missingFields.length) {
    throw new Error(`Field ${missingFields[0] as T} is required`);
  }
  return true;
}

export default function RootLayout() {
  const fields = [
    "gid",
    "cid",
    "title",
    "ateam",
    "bteam",
    "startTimestamp",
    "dueTimestamp",
    "coin",
    "coinMin",
  ] as (keyof ApiGuessSubmit)[];
  const navigate = useNavigate();
  const { id } = useParams();
  const toast = useToast();
  const [form, setForm] = useState<ApiGuessSubmit>({});
  const [gameList, setGameList] = useState<SelectType[]>();
  const [contestList, setContestList] = useState<SelectType[]>();
  const [teamList, setTeamList] = useState<SelectType[]>();
  const [coinList, setCoinList] = useState<SelectType[]>();
  const [detail, setDetail] = useState<ApiGuessPage>();

  useResize();

  const [previewGuess, setPreviewGuess] =
    useLocalStorageState<any>("preview-guess");

  const ateamLogo = useMemo(() => {
    if (form?.ateam) {
      const current = teamList?.find((item) => item.value === form?.ateam);
      return current?.image || "";
    }
  }, [form?.ateam, teamList]);

  const bteamLogo = useMemo(() => {
    if (form?.bteam) {
      const current = teamList?.find((item) => item.value === form?.bteam);
      return current?.image || "";
    }
  }, [form?.bteam, teamList]);

  const setValues = <K extends keyof ApiGuessSubmit>(
    name: K,
    value?: ApiGuessSubmit[K] | string
  ) => {
    setForm((pre) => {
      const updatedForm = { ...pre };
      updatedForm[name] = value as ApiGuessSubmit[K];
      return updatedForm;
    });
  };

  const getGuessDetail = async () => {
    const res = await apiGuessDetail({ id: id as any });
    if (res?.data) {
      setDetail(res.data);
      const { ateam, bteam, coin, coinMin, dueTime, startTime, title } =
        res.data;
      setForm((pre) => ({
        ...pre,
        ateam: ateam?.team,
        bteam: bteam?.team,
        coin,
        coinMin,
        dueTimestamp: Number(dueTime),
        startTimestamp: Number(startTime),
        id: id as any,
        title,
      }));
      await getGameList(res.data);
    }
  };

  const getGameList = async (iDetail?: ApiGuessPage) => {
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
    const data = res?.data?.map((item) => ({
      label: item?.name,
      value: item?.id,
      image: item?.mates?.logo,
    }));

    if (iDetail) {
      const current = data?.find((item) => item?.label === iDetail?.game);
      setValues("gid", current?.value);
    }
    setGameList(data);
  };

  const getContestList = async () => {
    const res = await gameContestPageList({
      gid: form.gid as any,
    });
    const data = res?.data?.map((item) => ({
      label: item?.name,
      value: item?.id,
    }));
    if (detail) {
      const current = data?.find((item) => item?.label === detail?.contest);
      setValues("cid", current?.value);
    }
    setContestList(data);
  };

  const getTeamList = async () => {
    const res = await apiTeamPageQuery({
      pageNum: 1,
      pageSize: 100,
      gid: form.gid as any,
    });
    const data = res?.data?.map((item) => ({
      label: item?.name,
      value: item?.id,
      image: item?.logo,
    }));
    setTeamList(data);
  };

  const getCoinList = async () => {
    const res = await getBlockCoinList();
    const data = res?.data?.map((item) => ({
      label: item?.coin,
      value: item?.coin,
      image: item?.logo,
    }));
    setCoinList(data);
  };

  const handleNext = async () => {
    try {
      if (validate(form, fields)) {
        if (form?.ateam === form?.bteam) {
          return toast({
            description: "不能选择相同战队",
            duration: 2000,
          });
        }
        setPreviewGuess({
          form,
          preview: {
            ...form,
            game: gameList?.find((item) => item.value === form.gid),
            contest: contestList?.find((item) => item.value === form.cid),
            teamA: teamList?.find((item) => item.value === form.ateam),
            teamB: teamList?.find((item) => item.value === form.bteam),
            coinItem: coinList?.find((item) => item.value === form.coin),
          },
        });
        await navigate("/manage/preview");
      }
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("Field")) {
        toast({
          description: error?.message,
          duration: 2000,
        });
      }
    }
  };

  useEffect(() => {
    if (id) {
      getGuessDetail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!id) {
      getGameList();
    }
    getCoinList();
    if (previewGuess) {
      setForm(previewGuess.form);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (form?.gid) {
      getContestList();
      getTeamList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form?.gid]);

  return (
    <Flex flex="1" direction="column">
      <Header title="发竞猜" />
      <Flex direction="column" gap="4" m="4" color="white" fontSize="sm">
        <QuizSelect
          list={gameList}
          icon
          value={form.gid}
          placeholder="选择游戏"
          setValue={(value) => setValues("gid", value)}
        />
        <QuizSelect
          list={contestList}
          value={form.cid}
          placeholder="选择比赛赛事"
          setValue={(value) => setValues("cid", value)}
        />
        <Textarea
          placeholder="输入热议标题"
          size="sm"
          bg="#242424"
          resize="none"
          border="1px solid rgba(255, 255, 255, 0.08)"
          _hover={{
            borderColor: "rgba(255, 255, 255, 0.08)",
          }}
          _placeholder={{
            color: "#A5A5A5",
          }}
          maxLength={50}
          value={form.title}
          onChange={(e) => setValues("title", e.target.value)}
        />
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={2}>
            <QuizSelect
              list={teamList}
              value={form.ateam}
              placeholder="Team A"
              setValue={(value) => setValues("ateam", value)}
            />
          </GridItem>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={2}>
            <QuizSelect
              list={teamList}
              value={form.bteam}
              placeholder="Team B"
              setValue={(value) => setValues("bteam", value)}
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={2} rounded="base" bg="#242424" position="relative">
            <Image
              boxSize="100%"
              src={ateamLogo}
              alt=""
              zIndex={10}
              position="relative"
              rounded="base"
              fallback={
                <Center
                  h="0"
                  border="1px solid rgba(255, 255, 255, 0.08)"
                  overflow="hidden"
                  rounded="base"
                  pb="100%"
                >
                  <Box
                    textAlign="center"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    <PicIcon boxSize="6" mb="2" />
                    <Box color="#A5A5A5" fontSize="sm">
                      图片
                    </Box>
                  </Box>
                </Center>
              }
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              color="white"
              fontSize="21px"
              fontWeight="semibold"
              fontStyle="italic"
              justifyContent="center"
              alignItems="center"
              h="full"
            >
              VS
            </Flex>
          </GridItem>
          <GridItem colSpan={2} rounded="base" bg="#242424" position="relative">
            <Image
              boxSize="100%"
              src={bteamLogo}
              alt=""
              zIndex={10}
              position="relative"
              rounded="base"
              fallback={
                <Center
                  h="0"
                  border="1px solid rgba(255, 255, 255, 0.08)"
                  overflow="hidden"
                  rounded="base"
                  pb="100%"
                >
                  <Box
                    textAlign="center"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    <PicIcon boxSize="6" mb="2" />
                    <Box color="#A5A5A5" fontSize="sm">
                      图片
                    </Box>
                  </Box>
                </Center>
              }
            />
          </GridItem>
        </Grid>
        <Box>
          <Box color="white" pb="2">
            比赛开始
          </Box>
          <DatePicker
            value={form.startTimestamp}
            setValue={(value) => setValues("startTimestamp", value)}
          />
        </Box>
        <Box>
          <Box color="white" pb="2">
            竞猜截止
          </Box>
          <DatePicker
            value={form.dueTimestamp}
            setValue={(value) => setValues("dueTimestamp", value)}
          />
        </Box>
        <Box>
          <Box color="white" pb="2">
            币种选择
          </Box>
          <CoinSelect
            coinList={coinList}
            value={form.coin}
            setCoin={(value) => setValues("coin", value)}
          />
        </Box>
        <Box>
          <Box color="white" pb="2">
            竞猜投入最小金额
          </Box>
          <Input
            size="md"
            value={form.coinMin}
            borderColor="rgba(255, 255, 255, 0.08)"
            bg="#242424"
            color="#A5A5A5"
            type="number"
            onChange={(e) => {
              const regex = /^0+(?=\d)/;
              const { value } = e.target;
              const coinMin = value.replace(regex, "");
              setValues("coinMin", coinMin as any);
            }}
          />
        </Box>
        <Button
          colorScheme="orange"
          bg="#F95625"
          w="full"
          color="white"
          rounded="base"
          fontSize="md"
          mt="2"
          size="lg"
          onClick={handleNext}
        >
          下一步
        </Button>
      </Flex>
    </Flex>
  );
}
