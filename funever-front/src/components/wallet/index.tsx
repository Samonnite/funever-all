import {
  Button,
  Center,
  Flex,
  Image,
  ScaleFade,
  useToast,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
// import { clusterApiUrl } from "@solana/web3.js";
import { useSessionStorageState } from "ahooks";
import { useEffect, useMemo } from "react";
import { useOutletContext } from "react-router-dom";

import { ApiConf } from "api/model";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

export function Wallet({
  children,
  config,
}: {
  children: React.ReactNode;
  config?: ApiConf;
}) {
  const toast = useToast();
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  // const network = WalletAdapterNetwork.Testnet;

  // You can also provide a custom RPC endpoint
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const endpoint = useMemo(() => config?.node || "", [config]);
  // const wsEndpoint = useMemo(() => config?.nodeWss || "", [config]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(() => [], []);
  // process.env.REACT_APP_RPC_HOST as string
  return (
    <ConnectionProvider
      endpoint={endpoint}
      // config={{
      //   commitment: "confirmed",
      //   wsEndpoint,
      // }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
const WalletContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
`;

type ContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function useWalletMask() {
  return useOutletContext<ContextType>();
}

export function WalletMask({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const toast = useToast();
  const { wallets, select, connected } = useWallet();
  const [, setOpenMask] = useSessionStorageState<boolean | undefined>(
    "is-wallet-mask-open"
  );

  const handleSelect = () => {
    if (!wallets.length) {
      return toast({
        description: "暂无可使用钱包",
        duration: 2000,
      });
    }

    select(wallets[0]?.adapter.name);
  };

  useEffect(() => {
    if (connected) {
      onClose();
    }
  }, [connected, onClose]);

  useEffect(() => {
    if (isOpen) {
      setOpenMask(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <ScaleFade in={isOpen} unmountOnExit>
      <WalletContainer>
        <Flex
          color="white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
        >
          <Image
            width="217"
            height="202"
            src={`/images/connect-mask.png`}
            alt="home"
          />
          <Button
            colorScheme="orange"
            bg="#F95625"
            rounded="sm"
            color="white"
            fontWeight="semibold"
            fontSize="sm"
            size="md"
            width="200px"
            mt="6"
            onClick={handleSelect}
          >
            连接钱包
          </Button>
          <Button
            rounded="sm"
            variant="outline"
            color="#A5A5A5"
            fontWeight="semibold"
            fontSize="sm"
            size="md"
            width="200px"
            borderColor="#A5A5A5"
            mt="6"
            sx={{
              backdropFilter: "drop-shadow(2px 4px 6px black)",
            }}
            onClick={() => onClose()}
          >
            取消
          </Button>
          <Center py="3"></Center>
        </Flex>
      </WalletContainer>
    </ScaleFade>
  );
}
