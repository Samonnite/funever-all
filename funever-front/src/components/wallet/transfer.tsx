import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useLockFn } from "ahooks";
import numeral from "numeral";
import { useEffect, useMemo, useState } from "react";

import { SliderThumbIcon } from "../Icons";

import SendTransaction, { OnSendTransaction } from "./sendTransaction";

import { useLayoutContext } from "Layout";
import { gameGuessApply } from "api";
import Confirm from "components/Confirm";
import useResize from "hooks/useResize";

export default function Transfer({
  isOpen,
  team,
  gsid,
  coin,
  coinMin,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  team: number;
  gsid: number;
  coin: string;
  coinMin: number;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const toast = useToast();
  useResize();
  const { account, coinList, config, userInfo, applyLogin } =
    useLayoutContext();
  const [amount, setAmount] = useState<number>();
  const [, setSliderValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const { publicKey } = useWallet();

  const [decimals, mintAddress] = useMemo(() => {
    const current = coinList?.find((item) => item?.coin === coin);
    return [current?.decimals, current?.mint];
  }, [coin, coinList]);

  const currentBalance = useMemo(() => {
    if (!mintAddress) {
      return account?.allBalance?.SOL || 0;
    }
    return account?.allBalance[mintAddress] || 0;
  }, [account?.allBalance, mintAddress]);

  const defaultSilde = useMemo(() => {
    if (coinMin && currentBalance) {
      return (coinMin / currentBalance) * 100;
    }
    return 0;
  }, [currentBalance, coinMin]);

  const handleSlide = (value: number) => {
    setSliderValue(value);
    if (currentBalance) {
      const nums = ((currentBalance * value) / 100).toFixed(2);
      setAmount(Number(nums));
    }
  };

  const applyGuess = async (hash: string) => {
    await gameGuessApply({
      team: team as any,
      gsid: gsid as any,
      hash,
    });
    await onOpenConfirm();
  };

  const handleSendTransaction = useLockFn(
    async (sendTransaction: OnSendTransaction) => {
      console.log(userInfo?.addr, publicKey?.toString());
      if (userInfo?.addr !== publicKey?.toString()) {
        toast({
          description: "正在校验账户信息",
          duration: 2000,
        });
        await applyLogin(false);
      }

      if (!amount) {
        return toast({
          description: "请输入押注金额",
          duration: 2000,
        });
      }
      if (Number(amount) > Number(currentBalance || 0)) {
        return toast({
          description: "余额不足",
          duration: 2000,
        });
      }
      if (Number(amount) < Number(coinMin)) {
        return toast({
          description: "低于最小押注金额",
          duration: 2000,
        });
      }
      try {
        setLoading(true);
        const hash = await sendTransaction(amount || 0);
        if (hash) {
          await applyGuess(hash);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  );

  useEffect(() => {
    if (coinMin) {
      setAmount(coinMin);
    }
  }, [coinMin]);

  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(3px)" />
        <DrawerContent bg="#000000" color="white" borderRightRadius="10px">
          <DrawerCloseButton />
          <DrawerHeader fontSize="md">押注</DrawerHeader>

          <DrawerBody>
            <InputGroup
              bg="rgba(255, 255, 255, 0.03)"
              borderColor="rgba(255, 255, 255, 0.08)"
              rounded="base"
              color="white"
              h="10"
            >
              <Input
                borderColor="rgba(255, 255, 255, 0.08)"
                type="number"
                value={amount}
                onChange={(e) => {
                  const regex = /^0+(?=\d)/;
                  const { value } = e.target;
                  const coinMin = value?.replace(regex, "");
                  setAmount(coinMin as any);
                }}
              />
              <InputRightElement w="fit-content">
                <Flex mr="2" h="9">
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                    bg="rgba(249, 86, 37, 0.1)"
                    color="#F95625"
                    fontWeight="semibold"
                    rounded="base"
                    h="full"
                    w="9"
                    onClick={() => setAmount((pre) => Number(pre) + 1)}
                  >
                    +1
                  </Flex>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    bg="rgba(249, 86, 37, 0.1)"
                    color="#F95625"
                    fontWeight="semibold"
                    rounded="base"
                    h="full"
                    w="9"
                    onClick={() => setAmount((pre) => Number(pre) + 10)}
                  >
                    +10
                  </Flex>
                </Flex>
              </InputRightElement>
            </InputGroup>
            <Slider defaultValue={defaultSilde} mt="6" onChange={handleSlide}>
              <SliderTrack bg="#2F2F2F" h="1.5">
                <SliderFilledTrack bg="#F95625" />
              </SliderTrack>
              <SliderThumb boxSize={4}>
                <Box as={SliderThumbIcon} />
              </SliderThumb>
            </Slider>
            <SendTransaction
              decimals={decimals}
              mintAddress={mintAddress}
              toPubkey={config?.addrPool || ""}
            >
              {(sendTransaction) => (
                <Button
                  colorScheme="orange"
                  bg="#F95625"
                  w="full"
                  color="white"
                  rounded="base"
                  fontSize="md"
                  mt="12"
                  size="lg"
                  onClick={() => handleSendTransaction(sendTransaction)}
                  isLoading={loading}
                >
                  竞猜
                </Button>
              )}
            </SendTransaction>

            <Center color="#A5A5A5" py="6" fontSize="sm">
              余额: {numeral(currentBalance).format("0,0[.][000000]")} {coin}
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Confirm
        isOpen={isOpenConfirm}
        content={<Box>已参与竞猜，等待链上确认...</Box>}
        hiddenCancel
        onClose={onCloseConfirm}
        handleConfirm={() => {
          onCloseConfirm();
          onSuccess();
        }}
      />
    </>
  );
}
