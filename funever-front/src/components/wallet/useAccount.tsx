import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { GetProgramAccountsFilter, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useThrottleEffect } from "ahooks";
import { useMemo, useState } from "react";

export interface TransformedObject {
  [key: string]: number | undefined;
}

export default function useAccount() {
  const [solBalance, setSolBalance] = useState<number>();
  const [tokenBalance, setTokenBalance] = useState<
    {
      mint: string;
      balance: number;
    }[]
  >();
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const allBalance: TransformedObject = useMemo(() => {
    if (!tokenBalance) return { SOL: solBalance };
    const transformedObject: TransformedObject = tokenBalance.reduce(
      (obj, item) => {
        obj[item.mint] = item.balance;
        return obj;
      },
      {} as TransformedObject
    );
    return {
      SOL: solBalance,
      ...transformedObject,
    };
  }, [solBalance, tokenBalance]);

  const getSolBalance = async () => {
    if (!publicKey) {
      return setSolBalance(0);
    }
    const result = await connection.getBalance(publicKey);
    const number = result / LAMPORTS_PER_SOL;
    console.log("balance == " + number);
    setSolBalance(number);

    return number;
  };
  const getTokenAccounts = async (mint?: string) => {
    if (!publicKey) {
      return;
    }
    const filters: GetProgramAccountsFilter[] = [
      {
        dataSize: 165, // number of bytes
      },
      {
        memcmp: {
          offset: 32, // number of bytes
          bytes: publicKey.toString(), // base58 encoded string
        },
      },
    ];
    const accounts = await connection.getParsedProgramAccounts(
      TOKEN_PROGRAM_ID,
      {
        filters: filters,
      }
    );

    const rows = accounts?.map((account) => {
      const parsedAccountInfo: any = account.account.data;
      const mintAddress: string = parsedAccountInfo["parsed"]["info"]["mint"];
      const accountBalance: number =
        parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
      return {
        mint: mintAddress,
        balance: accountBalance,
      };
    });

    const current = rows.find((item) => item.mint === mint);
    setTokenBalance(rows);
    return mint ? current?.balance : rows;
  };

  const getBalance = () => {
    getTokenAccounts();
    getSolBalance();
  };

  useThrottleEffect(() => {
    if (publicKey) {
      getBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return {
    solBalance,
    tokenBalance,
    allBalance,
    getSolBalance,
    getTokenAccounts,
  };
}
