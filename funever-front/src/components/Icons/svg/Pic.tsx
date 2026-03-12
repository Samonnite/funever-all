import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 25 24" {...props} fill="none">
    <rect
      x="3.83777"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="white"
      strokeWidth="1.5"
    />
    <circle
      cx="9.46527"
      cy="8.47705"
      r="2.25"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M5.83777 21L15.7777 11.5119C16.3671 10.9493 17.2979 10.9601 17.874 11.5363L21.8378 15.5"
      stroke="white"
      strokeWidth="1.5"
    />
  </ChakraIcon>
);

export default Icon;
