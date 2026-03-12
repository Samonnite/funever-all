import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 16 16" {...props} fill="none">
    <circle cx="8.07278" cy="8.07253" r="7.27273" fill="#EA4A4B" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.65851 8.07264L4.18359 10.5476L5.59781 11.9618L8.07272 9.48685L10.5476 11.9618L11.9619 10.5476L9.48694 8.07264L11.9618 5.59781L10.5476 4.18359L8.07272 6.65843L5.5979 4.1836L4.18369 5.59782L6.65851 8.07264Z"
      fill="white"
    />
  </ChakraIcon>
);

export default Icon;
