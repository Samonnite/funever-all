import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 105 90" {...props} fill="none">
    <g clipPath="url(#clip0_140_18010)">
      <circle cx="53" cy="50" r="40" fill="url(#paint0_linear_140_18010)" />
      <circle cx="53" cy="50" r="27" fill="#F95625" />
      <path
        d="M68.1213 44.1213C69.2929 42.9497 69.2929 41.0503 68.1213 39.8787C66.9497 38.7071 65.0503 38.7071 63.8787 39.8787L49 54.7574L42.1213 47.8787C40.9497 46.7071 39.0503 46.7071 37.8787 47.8787C36.7071 49.0503 36.7071 50.9497 37.8787 52.1213L46.8787 61.1213C48.0503 62.2929 49.9497 62.2929 51.1213 61.1213L68.1213 44.1213Z"
        fill="white"
        fillOpacity="0.9"
      />
      <circle opacity="0.2" cx="102" cy="16" r="3" fill="#F95625" />
      <circle cx="15.5" cy="5.5" r="5.5" fill="#F95625" />
      <circle opacity="0.9" cx="3" cy="53" r="3" fill="#F95625" />
      <circle opacity="0.6" cx="96.5" cy="74.5" r="3.5" fill="#F95625" />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_140_18010"
        x1="53"
        y1="-12.5"
        x2="53"
        y2="90"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F95625" />
        <stop offset="1" stopColor="#F95625" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_140_18010">
        <rect width="105" height="90" fill="white" />
      </clipPath>
    </defs>
  </ChakraIcon>
);

export default Icon;
