import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 16 16" {...props} fill="none">
    <circle cx="8.07278" cy="8.07253" r="7.27273" fill="#3086E9" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3V8V10H9H12V8H9L9 3H7Z"
      fill="white"
    />
  </ChakraIcon>
);

export default Icon;
