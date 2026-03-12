import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 16 16" {...props} fill="none">
    <circle cx="8.07271" cy="8.07253" r="7.27273" fill="#F95625" />
    <path
      d="M12.4853 3.99951L13.8677 5.4167L7.12298 11.9995L3.58594 8.62201L4.95325 7.19057L7.10793 9.24826L12.4853 3.99951Z"
      fill="#EDEDED"
    />
  </ChakraIcon>
);

export default Icon;
