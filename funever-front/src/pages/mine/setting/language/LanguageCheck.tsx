import { Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function LanguageCheck() {
  const [values, setValues] = useState<string[]>([]);
  const lanList = [
    {
      name: "中文简体",
      key: "zh_cn",
    },
    {
      name: "中文繁体",
      key: "zh_hk",
    },
    {
      name: "English",
      key: "en_gb",
    },
  ];

  return (
    <CheckboxGroup value={values}>
      {lanList.map((item) => (
        <Flex
          key={item.key}
          h="60px"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #2F2F2F"
          onClick={() => setValues([item.key])}
        >
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
                ml: 0,
              },
            }}
            value={item.key}
          >
            {item.name}
          </Checkbox>
        </Flex>
      ))}
    </CheckboxGroup>
  );
}
