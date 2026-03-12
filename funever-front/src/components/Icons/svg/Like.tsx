import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 18 18" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 0.94104V17.941H0V0.94104H18Z"
      fill="url(#like)"
    />
    <defs>
      <pattern
        id="like"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_6_1714"
          transform="scale(0.0555556 0.0588235)"
        />
      </pattern>
      <image
        id="image0_6_1714"
        width="18"
        height="17"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAABHNCSVQICAgIfAhkiAAAAOxJREFUOI2l070uRFEUxfF9bjESjY6oPICPAi3xCDoFlWeR0PECE08hJpGoJHRjOq0oFUqh8FPMhzsz9145M6s6ydrrn7V3ciIahAN84AUrTbNNkISuP13NCjo0rk+sztsmrxWWsIOzCsiw1QnWsTAZPsYD3mvCdfrBK26xm/AVEa2s3ad1V0TE05yQiIjH4V3uM9cq6xIpIiKwiJsZIOdT3dDKbHZRzhfDR0rpOyKeM+7SrQQNtJUB2mgCbWaAxmZHIP3fvVwR6ERE7z/QSFibOGYH2wMv6X/iXsl/q+2KU1xjr8YvcIQ29sveL0PHxLzLiMKrAAAAAElFTkSuQmCC"
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
