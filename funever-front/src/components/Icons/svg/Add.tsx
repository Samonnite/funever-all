import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <path
      d="M12.0001 3.51472V20.4853M3.51477 12H20.4853"
      stroke="#F95625"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ChakraIcon>
);

export default Icon;
