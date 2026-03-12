import { Box, Flex } from "@chakra-ui/react";
import { useRef, useState } from "react";

import { ApiGamePage } from "api/model";

const QueryList = ({
  list = [],
  onChange,
}: {
  list?: ApiGamePage[];
  onChange: (value?: number) => void;
}) => {
  const [active, setActive] = useState<number>();
  const flexContainerRef = useRef<any>(null);

  const handleChange = (value?: number) => {
    setActive(value);
    onChange(value);
  };

  return (
    <Box
      overflowX="auto"
      w="calc(100vw - 16px)"
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Flex
        gap="2"
        ref={flexContainerRef}
        fontSize="12px"
        fontWeight="semibold"
        pr="4"
        w="max-content"
      >
        {list.map((item) => (
          <Box
            key={item.name}
            rounded="base"
            py="2"
            px="4"
            bg={
              active === item.id
                ? "rgba(249, 86, 37, 0.12)"
                : "rgba(255, 255, 255, 0.1)"
            }
            color={active === item.id ? "#F95625" : "#A5A5A5"}
            whiteSpace="nowrap"
            lineHeight="6"
            onClick={() => handleChange(item.id)}
          >
            {item.name}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default QueryList;
