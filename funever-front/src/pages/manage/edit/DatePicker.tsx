import { Flex, Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import Picker from "pickerjs";
import "pickerjs/dist/picker.min.css";
import { useEffect, useRef } from "react";

import { DateIcon } from "components/Icons";

export default function DatePicker({
  value,
  setValue,
}: {
  value?: string | number;
  placeholder?: string;
  setValue?: (value: number) => void;
}) {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      new Picker(inputRef.current!, {
        format: "YYYY-MM-DD HH:mm",
        text: {
          title: "选择日期时间",
          cancel: "取消",
          confirm: "确认",
        },
      });
    }
    inputRef.current?.addEventListener("change", (event: any) => {
      const formated = dayjs(event.target.value).valueOf();
      setValue?.(formated);
    });
  }, [inputRef, setValue]);

  useEffect(() => {
    if (value && inputRef.current) {
      inputRef.current.value = dayjs(Number(value)).format("YYYY-MM-DD HH:mm");
    }
  }, [value]);

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        border="1px solid rgba(255, 255, 255, 0.08)"
        bg="#242424"
        rounded="md"
        pr="2"
      >
        <Input
          ref={inputRef}
          placeholder="Select Date and Time"
          size="md"
          isReadOnly
          color="#A5A5A5"
          border="none"
          sx={{
            "::-webkit-calendar-picker-indicator": {
              filter: "invert(1)",
            },
          }}
          _placeholder={{
            color: "#A5A5A5",
          }}
        />
        <DateIcon boxSize="6" />
      </Flex>
    </>
  );
}
