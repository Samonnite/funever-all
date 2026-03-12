import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 16 16" {...props} fill="none">
    <circle cx="8.07278" cy="8.07278" r="7.27273" fill="#F95625" />
    <path
      d="M12.4853 3.99976L13.8677 5.41695L7.12298 11.9998L3.58594 8.62225L4.95325 7.19081L7.10793 9.24851L12.4853 3.99976Z"
      fill="#EDEDED"
    />
  </ChakraIcon>
);

export default Icon;
