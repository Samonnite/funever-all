import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

import { SelectType } from "./index";

import { ArrowDownIcon } from "components/Icons";

const EmptyData = () => {
  return (
    <MenuItem bg="#404040" px="0" h="42px">
      暂无数据
    </MenuItem>
  );
};
export default function QuizSelect({
  list,
  value,
  icon = false,
  placeholder,
  setValue,
}: {
  value?: string | number;
  list?: SelectType[];
  icon?: boolean;
  placeholder?: string;
  setValue?: (value: string) => void;
}) {
  const [values, setValues] = useState<string[]>([]);

  const handleClick = (val: any) => {
    setValues([val]);
    setValue?.(val);
  };

  const iconImage = useMemo(() => {
    if (icon) {
      const current = list?.find((item) => item.value === values[0]);
      return current?.image || "";
    }
    return "";
  }, [list, values, icon]);

  const currentLabel = useMemo(() => {
    const current = list?.find((item) => item.value === values[0]);
    return current?.label || "";
  }, [list, values]);

  useEffect(() => {
    if (value) {
      setValues([`${value}`]);
    }
  }, [value]);

  return (
    <Menu matchWidth>
      <MenuButton
        bg="#242424"
        border="1px solid rgba(255, 255, 255, 0.08)"
        w="full"
        rounded="base"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          h="10"
          px="3"
          fontWeight="semibold"
        >
          <Box>
            {values[0] ? (
              <Flex alignItems="center">
                {icon && (
                  <Image
                    width="6"
                    height="6"
                    src={iconImage}
                    alt="home"
                    rounded="full"
                    mr="1.5"
                  />
                )}
                {currentLabel}
              </Flex>
            ) : (
              <Text color="#A5A5A5" fontSize="sm">
                {placeholder}
              </Text>
            )}
          </Box>
          <ArrowDownIcon boxSize="5" color="#777885" />
        </Flex>
      </MenuButton>
      <Flex zIndex="dropdown" position="relative">
        <MenuList
          color="#A5A5A5"
          bg="#404040"
          borderColor="#404040"
          px="3"
          w="full"
          py="0"
          minW="auto"
          maxH="80"
          overflowY="auto"
        >
          {list?.length ? (
            <CheckboxGroup value={values}>
              {list?.map((item, index) => (
                <Flex
                  key={item.value}
                  h="42px"
                  justifyContent="space-between"
                  alignItems="center"
                  borderTop={index === 0 ? "" : "1px solid #777885"}
                  onClick={() => handleClick(item.value)}
                >
                  <MenuItem bg="#404040" px="0">
                    <Checkbox
                      size="md"
                      flexDirection="row-reverse"
                      justifyContent="space-between"
                      w="full"
                      h="full"
                      sx={{
                        ".chakra-checkbox__control": {
                          border: "1px solid #666666",
                          borderRadius: "50%",
                        },
                        ".chakra-checkbox__control[data-checked]": {
                          background: "#F95625",
                          borderColor: "#F95625",
                        },
                        ".chakra-checkbox__label": {
                          fontSize: "xs",
                          fontWeight: "semibold",
                          ml: 0,
                        },
                      }}
                      value={item.value}
                    >
                      <Flex
                        alignItems="center"
                        color={values[0] === item.value ? "#F95625" : ""}
                      >
                        {icon && (
                          <Image
                            width="6"
                            height="6"
                            src={item.image}
                            alt="home"
                            rounded="full"
                            mr="1.5"
                          />
                        )}
                        {item.label}
                      </Flex>
                    </Checkbox>
                  </MenuItem>
                </Flex>
              ))}
            </CheckboxGroup>
          ) : (
            <EmptyData />
          )}
        </MenuList>
      </Flex>
    </Menu>
  );
}
