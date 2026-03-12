import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 22 22" {...props} fill="none">
    <rect opacity="0.01" width="22" height="22" fill="#D8D8D8" />
    <path
      d="M5.8 9C5.8 6.12812 8.12812 3.8 11 3.8C13.8719 3.8 16.2 6.12812 16.2 9V14.2H5.8V9Z"
      stroke="white"
      strokeWidth="1.6"
    />
    <path d="M3 14.2216H19" stroke="white" strokeWidth="1.6" />
    <path d="M9 18H13" stroke="white" strokeWidth="1.6" />
  </ChakraIcon>
);

export default Icon;
