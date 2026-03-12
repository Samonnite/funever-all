import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M15 18L9 12L15 6"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ChakraIcon>
);

export default Icon;
