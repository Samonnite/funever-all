import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 44 44" {...props} fill="none">
    <g clipPath="url(#clip0_59_12872)">
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0H39C41.7614 0 44 2.23858 44 5V39C44 41.7614 41.7614 44 39 44H5C2.23858 44 0 41.7614 0 39V5Z"
        fill="url(#paint0_linear_59_12872)"
        fillOpacity="0.2"
      />
      <g clipPath="url(#clip1_59_12872)">
        <path
          d="M14.29 32.0001C13.6825 32.0009 13.0997 31.7594 12.6708 31.3292C11.7764 30.435 11.7764 28.985 12.6708 28.0906L28.0906 12.6708C28.9848 11.7764 30.4349 11.7764 31.3292 12.6708C32.2236 13.5651 32.2236 15.015 31.3292 15.9094L15.9094 31.3292C15.4804 31.7594 14.8976 32.0008 14.29 32.0001Z"
          fill="#16B979"
        />
        <path
          d="M25.4351 28.9436C25.4334 30.6312 26.801 32 28.4885 32C30.176 32 31.5436 30.6312 31.5419 28.9436C31.5436 27.2561 30.176 25.8872 28.4885 25.8872C26.801 25.8872 25.4334 27.2561 25.4351 28.9436Z"
          fill="#16B979"
        />
        <path
          d="M12 15.0534C12 16.7398 13.3671 18.1069 15.0534 18.1069C16.7398 18.1069 18.1069 16.7398 18.1069 15.0534C18.1069 13.3671 16.7398 12 15.0534 12C13.3671 12 12 13.3671 12 15.0534Z"
          fill="#16B979"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_59_12872"
        x1="0"
        y1="0"
        x2="0"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#16B979" />
        <stop offset="1" stopColor="#057247" />
      </linearGradient>
      <clipPath id="clip0_59_12872">
        <rect width="44" height="44" fill="white" />
      </clipPath>
      <clipPath id="clip1_59_12872">
        <rect
          width="20"
          height="20.0001"
          fill="white"
          transform="translate(12 12)"
        />
      </clipPath>
    </defs>
  </ChakraIcon>
);

export default Icon;
