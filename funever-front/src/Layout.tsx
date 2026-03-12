import { Buffer } from "buffer";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.Buffer = Buffer;

import { useDisclosure, useToast } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useLocalStorageState, useSessionStorageState } from "ahooks";
import bs58 from "bs58";
import { createContext, useContext, useEffect, useMemo } from "react";

import {
  getBlockCoinList,
  getUserBase,
  userLoginApply,
  userLoginSubmit,
} from "api";
import { ApiCoinPage, ApiConf, LoginApply, UserBase } from "api/model";
import { WalletMask } from "components/wallet";
import useAccount, { TransformedObject } from "components/wallet/useAccount";
import { setToastFunc } from "utils/axios";

type ContextType = {
  token?: string;
  userInfo?: UserBase;
  coinList?: ApiCoinPage[];
  config?: ApiConf;
  account?: {
    solBalance: number | undefined;
    tokenBalance:
      | {
          mint: string;
          balance: number;
        }[]
      | undefined;
    allBalance: TransformedObject;
    getSolBalance: () => Promise<number | void>;
    getTokenAccounts: (mint?: string | undefined) => Promise<
      | number
      | {
          mint: string;
          balance: number;
        }[]
      | undefined
    >;
  };
  applyLogin: (isToast?: boolean) => Promise<void>;
};
export const LayoutContext = createContext<ContextType | null>(null);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context)
    throw new Error(
      "useLayoutContext context must be use inside LayoutContext"
    );

  return context;
};

export default function Layout({
  children,
  config,
}: {
  children?: React.ReactNode;
  config?: ApiConf;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { publicKey, signMessage, connected, disconnecting, disconnect } =
    useWallet();
  const [token, setToken] = useLocalStorageState("accessToken", {
    serializer: (v: string) => v ?? "",
    deserializer: (v) => v,
  });

  const [coinList, setBlockCoinList] = useLocalStorageState<ApiCoinPage[]>(
    "coinList",
    {
      defaultValue: [
        {
          coin: "SOL",
          logo: "https://static.okx.com/cdn/oksupport/asset/currency/icon/sol.png",
          mint: "",
          decimals: 9,
        },
        {
          coin: "USDT",
          logo: "https://static.okx.com/cdn/oksupport/asset/currency/icon/usdt.png",
          mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          decimals: 6,
        },
      ],
    }
  );
  const [userInfo, setUserInfo] = useLocalStorageState<UserBase>("userInfo");
  const [openMask, setOpenMask] = useSessionStorageState<boolean | undefined>(
    "is-wallet-mask-open"
  );
  const addr = useMemo(() => publicKey?.toBase58() || "", [publicKey]);
  const account = useAccount();

  const getCoinList = async () => {
    const res = await getBlockCoinList();
    if (res.data) {
      setBlockCoinList(res.data);
    }
  };

  const generateSign = async (text: string) => {
    try {
      const message = new TextEncoder().encode(text);
      const signature = (await signMessage?.(message)) as Uint8Array;
      const sign = bs58.encode(signature);
      return sign;
    } catch (error: any) {
      toast({
        description: error?.message,
        duration: 2000,
      });
      throw disconnect();
    }
  };
  const login = async (key: string, sign?: string, isToast = true) => {
    const res = await userLoginSubmit({
      key,
      sign,
    });
    setToken(res.data?.loginToken);
    getUser();
    if (isToast) {
      toast({
        description: "登录成功",
        duration: 2000,
      });
    }
  };

  const applyLogin = async (isToast = true) => {
    console.log("login:addr===", addr);
    if (!addr) return;
    const res = await userLoginApply({ addr });
    const { key, loginSign, text } = res.data as LoginApply;
    if (key) {
      if (loginSign && text) {
        const sign = await generateSign(text);
        await login(key, sign, isToast);
      } else {
        await login(key, undefined, isToast);
      }
    }
  };

  const getUser = async () => {
    try {
      const res = await getUserBase();
      setUserInfo(res.data);
    } catch (error) {
      if (connected) {
        applyLogin();
      }
    }
  };

  useEffect(() => {
    setToastFunc((message: string) => {
      toast({
        description: message,
        duration: 2000,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (connected) {
      if (token) {
        getUser();
        getCoinList();
      } else {
        applyLogin();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  useEffect(() => {
    if (!publicKey && !openMask) {
      onOpen();
      setOpenMask(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (disconnecting) {
      setOpenMask(true);
      setToken("");
      setUserInfo(undefined);
    }
  }, [disconnecting, setToken, setUserInfo, setOpenMask]);

  useEffect(() => {
    console.log(
      "accountChange:address====",
      publicKey?.toBase58(),
      userInfo?.addr
    );

    if (
      publicKey?.toString() &&
      userInfo?.addr &&
      publicKey?.toString() !== userInfo?.addr
    ) {
      applyLogin();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey, userInfo?.addr]);

  return (
    <LayoutContext.Provider
      value={{
        config,
        token,
        userInfo,
        coinList,
        account,
        applyLogin,
      }}
    >
      <WalletMask isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
    </LayoutContext.Provider>
  );
}
