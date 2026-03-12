import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <circle cx="12.5" cy="7.5" r="3.75" stroke="white" strokeWidth="1.5" />
    <path
      d="M5.33838 18.2549C5.33838 14.3889 8.47239 11.2549 12.3384 11.2549"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18.6867 12.7512C19.9441 12.7512 20.75 13.7595 20.75 15.1166C20.75 16.1697 19.7971 17.3294 17.9197 18.6326C17.7964 18.718 17.65 18.7637 17.5 18.7637C17.35 18.7637 17.2036 18.718 17.0803 18.6326C15.2029 17.3294 14.25 16.1697 14.25 15.1166C14.25 13.7595 15.0559 12.7512 16.3133 12.7512C16.7674 12.7512 17.0755 12.9099 17.5 13.2699C17.9246 12.91 18.2326 12.7512 18.6867 12.7512Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </ChakraIcon>
);

export default Icon;
