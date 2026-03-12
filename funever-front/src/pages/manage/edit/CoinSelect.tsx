import { Box, Image, Tag, TagLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { SelectType } from "./index";

export default function CoinSelect({
  value,
  coinList,
  setCoin,
}: {
  value?: string;
  coinList?: SelectType[];
  setCoin?: (coin: string) => void;
}) {
  const [active, setActive] = useState<string>();

  const handleClick = (coin: string) => {
    setActive(coin);
    setCoin?.(coin);
  };

  useEffect(() => {
    if (value) {
      setActive(value);
    }
  }, [value]);

  return (
    <Box>
      {coinList?.map((item) => (
        <Tag
          key={item.value}
          size="lg"
          bg={
            active === item.value
              ? "rgba(249, 86, 37, 0.12)"
              : "rgba(255,255,255,0.1)"
          }
          color={active === item.value ? "#F95625" : "#A5A5A5"}
          border={active === item.value ? "1px solid #F95625" : ""}
          borderRadius="base"
          fontSize="xs"
          onClick={() => handleClick(item?.value as string)}
          mr="2"
        >
          <Image
            src={item.image}
            width="4"
            height="4"
            alt=""
            rounded="full"
            mr="2.5"
          />
          <TagLabel>{item.value}</TagLabel>
        </Tag>
      ))}
    </Box>
  );
}
