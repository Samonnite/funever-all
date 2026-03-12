import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 48 48" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48 0V48H0V0H48V0Z"
      fill="url(#pattern1)"
    />
    <defs>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_0_248" transform="scale(0.0208333)" />
      </pattern>
      <image
        id="image0_0_248"
        width="48"
        height="48"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
