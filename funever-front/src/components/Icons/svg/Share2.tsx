import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M11.5 5H10.5C7.46243 5 5 7.46243 5 10.5V13.5C5 16.5376 7.46243 19 10.5 19H13.5C16.5376 19 19 16.5376 19 13.5V13"
      stroke="#F95625"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16.4122 3.6969L20.1818 6.84959L17.0291 10.6192"
      stroke="#F95625"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14L12 11C12 8.79086 13.7909 7 16 7L19 7"
      stroke="#F95625"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ChakraIcon>
);

export default Icon;
