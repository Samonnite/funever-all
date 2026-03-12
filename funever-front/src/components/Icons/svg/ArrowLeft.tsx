import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 31 25" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31 0V25H0V0H31Z"
      fill="url(#arrowLeft)"
    />
    <defs>
      <pattern
        id="arrowLeft"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_2_256" transform="scale(0.0322581 0.04)" />
      </pattern>
      <image
        id="image0_2_256"
        width="31"
        height="25"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAZCAYAAADJ9/UkAAAABHNCSVQICAgIfAhkiAAAARhJREFUSInFlk0uBFEUhb8aiL/WaBRDYRkWZC12YGoBhkJEIk2Xvx6QGLABY4OeGPlMquPl6UmHd51hVSrfOan77jswhdQN9Vntq2vTfPsrqT313m8dRIFrtUnAjboTAV5RbxLwk1pHgGv1NgFfq8sR4K46yBKvR4C31LsEPFBXI8CdLPFjyLFqEz9kU92LAHfbgRprGDVcm0niT/VcnS/NrdRd4AjYa5+9A31gBHQKcWeAt0o9BPaTFwJVIWiq0aTkAK/ABzBXEP4C/PjnqsdqRHrGBvJpPwmDtwbyc36qLkQayDfcpTobaSDf7WfqYqSB/FZr1KVIA/l9fqGWWjwTDeRNZmhwecw73JW6HWngf9prYuBPe/sXtdvV35tuJZkAAAAASUVORK5CYII="
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
