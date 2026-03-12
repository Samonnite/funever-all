import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.55002 3H14.95V21H9.55002V3ZM3.25 12H7.75V21H3.25V12ZM21.25 9H16.75V21H21.25V9Z"
      fill="currentColor"
    />
  </ChakraIcon>
);

export default Icon;
