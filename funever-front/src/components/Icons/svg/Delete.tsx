import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M18 6.5L6 18.5M6 6.5L18 18.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ChakraIcon>
);

export default Icon;
