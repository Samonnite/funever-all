import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 16 16" {...props} fill="none">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.07278" cy="8.07253" r="7.27273" fill="#3086E9" />
      <path
        d="M3.57275 7.07275H12.5728V9.07275H3.57275V7.07275Z"
        fill="white"
      />
    </svg>
  </ChakraIcon>
);

export default Icon;
