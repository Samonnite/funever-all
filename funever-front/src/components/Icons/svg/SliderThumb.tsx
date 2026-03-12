import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 18 17" {...props} fill="none">
    <circle cx="9" cy="8.5" r="8" fill="#D9D9D9" stroke="#B5B5B5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 5.5C5.5 5.22386 5.72386 5 6 5C6.27614 5 6.5 5.22386 6.5 5.5V12.5C6.5 12.7761 6.27614 13 6 13C5.72386 13 5.5 12.7761 5.5 12.5V5.5ZM8.5 5.5C8.5 5.22386 8.72386 5 9 5C9.27614 5 9.5 5.22386 9.5 5.5V12.5C9.5 12.7761 9.27614 13 9 13C8.72386 13 8.5 12.7761 8.5 12.5V5.5ZM12 5C11.7239 5 11.5 5.22386 11.5 5.5V12.5C11.5 12.7761 11.7239 13 12 13C12.2761 13 12.5 12.7761 12.5 12.5V5.5C12.5 5.22386 12.2761 5 12 5Z"
      fill="#B5B5B5"
    />
  </ChakraIcon>
);

export default Icon;
