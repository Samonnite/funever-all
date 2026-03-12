import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 30 30" {...props} fill="none">
    <g clipPath="url(#clip0_205_4308)">
      <rect opacity="0.2" width="30" height="30" rx="4" fill="#777885" />
      <rect
        x="6.79412"
        y="10.7093"
        width="16.4118"
        height="11.1177"
        rx="1.32353"
        stroke="#A5A5A5"
        strokeWidth="1.58824"
      />
      <path
        d="M7.52605 10.8523L17.6861 6.01691C19.0674 5.3595 20.6687 6.33871 20.7129 7.86787L20.7904 10.5495"
        stroke="#A5A5A5"
        strokeWidth="1.58824"
      />
      <path
        d="M16.3235 16.2681C16.3235 14.9523 17.3902 13.8857 18.7059 13.8857H23.2059V18.6504H18.7059C17.3902 18.6504 16.3235 17.5838 16.3235 16.2681Z"
        stroke="#A5A5A5"
        strokeWidth="1.58824"
      />
      <circle cx="18.987" cy="16.2681" r="1.05882" fill="#A5A5A5" />
    </g>
    <defs>
      <clipPath id="clip0_205_4308">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </ChakraIcon>
);

export default Icon;
