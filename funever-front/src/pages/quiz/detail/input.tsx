import {
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useLockFn } from "ahooks";
import { useMemo, useRef, useState } from "react";

import { guessCommenSave } from "api";
import { SendIcon } from "components/Icons";
import useResize from "hooks/useResize";
export default function RemarkInput({
  gsid,
  reset,
}: {
  gsid: number;
  reset: () => void;
}) {
  const inputCon = useRef<any>(null);
  const toast = useToast();
  const [value, setValue] = useState("");

  const sendColor = useMemo(() => {
    return value ? "#F95625" : "#A5A5A5";
  }, [value]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = useLockFn(async (e: any) => {
    e.preventDefault();
    await guessCommenSave({
      gsid,
      remark: value,
    });
    toast({
      description: "评论成功",
      duration: 2000,
    });
    setValue("");
    reset();
  });

  useResize();

  return (
    <Grid
      w="full"
      bg="#404040"
      pt="3"
      pb="7"
      alignItems="center"
      px="5"
      position="fixed"
      bottom="0"
      left="0"
      zIndex="20"
      ref={inputCon}
    >
      <form onSubmit={handleSubmit}>
        <InputGroup bg="#1D1D1D" border="none" rounded="base" color="white">
          <Input
            placeholder="发表讨论..."
            border="none"
            onChange={handleChange}
            value={value}
            onFocus={(e) => {
              e.preventDefault();
              e.stopPropagation();
              inputCon.current?.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
              });
            }}
          />
          <InputRightElement onClick={handleSubmit}>
            <SendIcon boxSize="6" color={sendColor} />
          </InputRightElement>
        </InputGroup>
      </form>
    </Grid>
  );
}
