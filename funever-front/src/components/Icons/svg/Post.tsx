import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 33 32" {...props} fill="none">
    <rect x="20.5" y="10" width="6" height="19" rx="1.45455" fill="#F95625" />
    <path
      d="M6.50003 5.57572C6.50003 4.60504 7.28693 3.81815 8.25761 3.81815H16.5H20.7056C21.2272 3.81815 21.7219 4.04984 22.0558 4.45055L26.0927 9.29481C26.3559 9.61067 26.5 10.0088 26.5 10.42V16V26.4242C26.5 27.3949 25.7131 28.1818 24.7425 28.1818H8.25761C7.28693 28.1818 6.50003 27.3949 6.50003 26.4242V5.57572Z"
      stroke="white"
      strokeWidth="1.81818"
    />
    <rect
      x="9.22729"
      y="10.9091"
      width="12.3636"
      height="1.81818"
      rx="0.909091"
      fill="white"
    />
    <rect
      x="9.22729"
      y="16.3636"
      width="10.6667"
      height="1.81818"
      rx="0.909091"
      fill="white"
    />
    <rect
      x="9.22729"
      y="21.8181"
      width="8"
      height="1.81818"
      rx="0.909091"
      fill="white"
    />
  </ChakraIcon>
);

export default Icon;
