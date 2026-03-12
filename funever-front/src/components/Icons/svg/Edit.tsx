import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <rect opacity="0.01" width="24" height="24" fill="white" />
    <path
      d="M12 11L18 5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 9.5V12V18C18 18.5523 17.5523 19 17 19H8C7.44771 19 7 18.5523 7 18V6C7 5.44772 7.44772 5 8 5H12.5H13.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ChakraIcon>
);

export default Icon;
