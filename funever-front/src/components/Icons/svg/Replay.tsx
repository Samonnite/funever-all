import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <rect x="7" y="7.25" width="10" height="1.8" rx="0.9" fill="white" />
    <rect x="7" y="11.25" width="6" height="1.8" rx="0.9" fill="white" />
    <path
      d="M3.75 7.25C3.75 5.45507 5.20507 4 7 4H17C18.7949 4 20.25 5.45507 20.25 7.25V13.25C20.25 15.0449 18.7949 16.5 17 16.5H15.5C14.8096 16.5 14.25 17.0596 14.25 17.75V19.2165L11.2313 16.8686C10.9241 16.6297 10.5461 16.5 10.1569 16.5H7C5.20507 16.5 3.75 15.0449 3.75 13.25V7.25Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </ChakraIcon>
);

export default Icon;
