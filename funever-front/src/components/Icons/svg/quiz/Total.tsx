import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 44 44" {...props} fill="none">
    <g clipPath="url(#clip0_59_12878)">
      <g clipPath="url(#clip1_59_12878)">
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H39C41.7614 0 44 2.23858 44 5V39C44 41.7614 41.7614 44 39 44H5C2.23858 44 0 41.7614 0 39V5Z"
          fill="#2F86F6"
          fillOpacity="0.2"
        />
      </g>
      <rect x="9" y="22" width="6" height="10" rx="2" fill="#2F86F6" />
      <rect x="17" y="18" width="6" height="14" rx="2" fill="#2F86F6" />
      <rect x="26" y="11" width="6" height="21" rx="2" fill="#2F86F6" />
    </g>
    <defs>
      <clipPath id="clip0_59_12878">
        <rect width="44" height="44" fill="white" />
      </clipPath>
      <clipPath id="clip1_59_12878">
        <rect width="44" height="44" fill="white" />
      </clipPath>
    </defs>
  </ChakraIcon>
);

export default Icon;
