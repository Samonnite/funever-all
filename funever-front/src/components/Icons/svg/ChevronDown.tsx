import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 15 9" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2676 0V9H0.267578V0H14.2676Z"
      fill="url(#down)"
    />
    <defs>
      <pattern
        id="down"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_6_2131" transform="scale(0.0714286 0.111111)" />
      </pattern>
      <image
        id="image0_6_2131"
        width="14"
        height="9"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAJCAYAAAACTR1pAAAABHNCSVQICAgIfAhkiAAAAOVJREFUKJGNzzFLAnEYx/Hvc/87UGq01xDY1uDiOVi4+QIcolfgpiByBTeIcKKjb6WphOB/TU4O0VBDW7W4eVTcPU1CXSL3G3/8PvA8MhiO+6gOAI8iUV6Moe2i2QVIpRACEE7TVGsOKkMgK+64X6+PbkwcL54b/tkHSLuAe/osfbfms/7GAFi7WNb98wOB+h70LjjN6ej6DcBs29je3fq+rQInO1CimbaiKHjcFs6v67Vc+roEHnIoU5HOZHK1zP36N71eWHE9zwLHACjdKArm+d0/CBCG4WGSuM3UyOt0HKx2bX4AcjNF2ZvXK4EAAAAASUVORK5CYII="
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
