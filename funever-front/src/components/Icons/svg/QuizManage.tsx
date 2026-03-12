import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 24 24" {...props} fill="none">
    <rect
      x="2.75"
      y="8.75"
      width="19.5"
      height="10.5"
      rx="5.25"
      stroke="white"
      strokeWidth="1.5"
    />
    <circle
      cx="16.5009"
      cy="14.2019"
      r="2.25"
      stroke="white"
      strokeWidth="1.5"
    />
    <rect
      x="7.18176"
      y="11.2019"
      width="6.08785"
      height="1.82636"
      rx="0.913178"
      transform="rotate(45 7.18176 11.2019)"
      fill="white"
    />
    <rect
      x="11.4866"
      y="12.4934"
      width="6.08785"
      height="1.82636"
      rx="0.913178"
      transform="rotate(135 11.4866 12.4934)"
      fill="white"
    />
    <path
      d="M16 3V6H12V8.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </ChakraIcon>
);

export default Icon;
