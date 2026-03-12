import { useToast } from "@chakra-ui/react";
import {
  Account,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  ComputeBudgetProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { getSimulationComputeUnits } from "@solana-developers/helpers";
import { useEffect, useState } from "react";

interface Props {
  decimals?: number;
  mintAddress?: string;
  toPubkey?: string;
  children: (
    sendTransaction: OnSendTransaction,
    getFromTokenAccount: () => Promise<Account | undefined>,
    getToTokenAccount: () => Promise<Account | undefined>
  ) => React.ReactNode;
}

export type OnSendTransaction = (amount: number) => Promise<string | undefined>;

const SendTransaction: React.FC<Props> = ({
  decimals,
  mintAddress,
  toPubkey,
  children,
}) => {
  const [fromTokenAccount, setFromTokenAccount] = useState<Account>();
  const [toTokenAccount, setToTokenAccount] = useState<Account>();
  const { connection } = useConnection();
  const { publicKey, signTransaction, sendTransaction } = useWallet();

  const toast = useToast();

  if (!decimals) {
    console.log("decimals error");
  }
  if (!publicKey) {
    new WalletNotConnectedError();
  }

  const onSendSolTransaction = async (amount: number) => {
    if (!toPubkey || !amount || !publicKey || !signTransaction) return;
    if (!publicKey) {
      new WalletNotConnectedError();
      return;
    }
    console.log("Processing transaction...");
    try {
      const toPublicKey = new PublicKey(toPubkey);
      const instructions: TransactionInstruction[] = [];
      instructions.push(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          lamports: amount * LAMPORTS_PER_SOL,
          toPubkey: toPublicKey,
        })
      );

      const prioritizationFees = await connection.getRecentPrioritizationFees({
        lockedWritableAccounts: [publicKey],
      });
      // eslint-disable-next-line prefer-spread
      const prioritizationFee = Math.max.apply(
        Math,
        prioritizationFees?.map((item) => item.prioritizationFee)
      );

      const computeUnits = await getSimulationComputeUnits(
        connection,
        instructions,
        publicKey,
        []
      );

      const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
        units: 1000000 + (computeUnits || 0),
      });

      const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 150000 + (prioritizationFee || 0),
      });
      const transaction = new Transaction();

      instructions.forEach((instruction) => {
        transaction
          .add(modifyComputeUnits)
          .add(addPriorityFee)
          .add(instruction);
      });

      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash("max");

      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;
      const signedTransaction = await signTransaction?.(transaction);
      console.log("Transaction sent");
      if (signedTransaction && signedTransaction?.serialize) {
        const signature = await connection.sendRawTransaction(
          signedTransaction?.serialize?.()
        );
        // await connection.confirmTransaction({
        //   blockhash,
        //   lastValidBlockHeight,
        //   signature,
        // });
        return signature;
      }
      return "";
    } catch (error: any) {
      if (
        error.message?.includes("User denied request signature") ||
        error.message?.includes("User rejected the request") ||
        (error.name === "WalletSignTransactionError" &&
          error.message?.includes("serialize"))
      ) {
        toast({
          description: "取消竞猜",
          duration: 2000,
        });
      } else {
        toast({
          description: "竞猜失败",
          duration: 2000,
        });
      }
      console.log(`Transaction failed: ${error.message}`);
    }
  };

  const getFromTokenAccount = async () => {
    if (!mintAddress || !publicKey) return;
    try {
      const mint = new PublicKey(mintAddress);
      const associatedToken = await getAssociatedTokenAddress(
        mint,
        publicKey,
        false,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      );
      const account = await getAccount(
        connection,
        associatedToken,
        "finalized",
        TOKEN_PROGRAM_ID
      );
      console.log("fromAccount", account);

      setFromTokenAccount(account);
      return account;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getToTokenAccount = async () => {
    if (!mintAddress || !toPubkey) return;
    const toPublicKey = new PublicKey(toPubkey);
    const mint = new PublicKey(mintAddress);
    try {
      const associatedToken = await getAssociatedTokenAddress(
        mint,
        toPublicKey,
        false,
        TOKEN_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      );
      const account = await getAccount(
        connection,
        associatedToken,
        "finalized",
        TOKEN_PROGRAM_ID
      );
      console.log("toAccount", account);
      setToTokenAccount(account);
      return account;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onSendSPLTransaction = async (amount: number) => {
    if (
      !toPubkey ||
      !amount ||
      !publicKey ||
      !sendTransaction ||
      !signTransaction ||
      !mintAddress ||
      !decimals
    )
      return;
    let fromAccount = fromTokenAccount;
    let toAccount = toTokenAccount;
    if (!fromAccount) {
      fromAccount = await getFromTokenAccount();
    }

    if (!toAccount) {
      toAccount = await getToTokenAccount();
    }
    if (!fromAccount || !toAccount) {
      toast({
        description: "获取账户信息失败，请重试",
      });
      return;
    }
    console.log("Processing transaction...");

    try {
      // step 1: create transaction
      const transactionResponse = createTransferInstruction(
        fromAccount.address,
        toAccount.address,
        publicKey,
        amount * Math.pow(10, decimals)
      );

      const prioritizationFees = await connection.getRecentPrioritizationFees({
        lockedWritableAccounts: [fromAccount.address],
      });
      // eslint-disable-next-line prefer-spread
      const prioritizationFee = Math.max.apply(
        Math,
        prioritizationFees?.map((item) => item.prioritizationFee)
      );

      const computeUnits = await getSimulationComputeUnits(
        connection,
        [transactionResponse],
        publicKey,
        []
      );

      const modifyComputeUnits = ComputeBudgetProgram.setComputeUnitLimit({
        units: 2000000 + (computeUnits || 0),
      });

      const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 150000 + (prioritizationFee || 0),
      });

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext("max");

      // step 2: send transaction
      const transaction = new Transaction()
        .add(modifyComputeUnits)
        .add(addPriorityFee)
        .add(transactionResponse);

      transaction.recentBlockhash = blockhash;
      const signature = await sendTransaction(transaction, connection, {
        skipPreflight: false,
        minContextSlot,
      });

      // // step 3: confirm transaction
      // await connection.confirmTransaction({
      //   blockhash,
      //   lastValidBlockHeight,
      //   signature,
      // });

      console.log(`Transaction sent`, signature);
      return signature;
    } catch (error: any) {
      // error handle
      if (
        error.message?.includes("User denied request signature") ||
        error.message?.includes("User rejected the request") ||
        (error.name === "WalletSendTransactionError" &&
          error.message?.includes("Expected String"))
      ) {
        toast({
          description: "取消竞猜",
          duration: 2000,
        });
      } else {
        toast({
          description: "竞猜失败",
          duration: 2000,
        });
      }
      console.log(`Transaction failed: ${error.message}`);
    }
  };

  const onSendTransaction = mintAddress
    ? onSendSPLTransaction
    : onSendSolTransaction;

  useEffect(() => {
    if (mintAddress && toPubkey) {
      getFromTokenAccount();
      getToTokenAccount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintAddress, toPubkey]);

  return (
    <>{children(onSendTransaction, getFromTokenAccount, getToTokenAccount)}</>
  );
};

export default SendTransaction;
