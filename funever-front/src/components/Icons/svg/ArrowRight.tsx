import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 31 25" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31 0V25H0V0H31Z"
      fill="url(#arrowRight)"
    />
    <defs>
      <pattern
        id="arrowRight"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_2_257" transform="scale(0.0322581 0.04)" />
      </pattern>
      <image
        id="image0_2_257"
        width="31"
        height="25"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAZCAYAAADJ9/UkAAAABHNCSVQICAgIfAhkiAAAARhJREFUSInF1k1qFFEUxfFTI6Om03YSu4VMxJGuwqX0erIDs4g4kwQRJHY6fg0U3IlkEBD8OUiFPGpmmro5s3oP6n843HfvTTYU9nCGX3i66f/+F37oVl+xWwl/gXVjYI15pYE5fjYGLvCk0sAUq8bA5+oE9gcJnGOn0sCsh97oC55VGtjDj0EC25UGdgev4Ft1AlN8bwysqmvgId7jb5PAIkk6vElykOTPSPzLJJMkr5PM+rN1kmWH3/3l2JKka76POrxN8mpE6FWSrSQvm7N1kuWIzGuhw/Gg6hejg3v4u/JqxyOclL9zPMDH8g6Hxzgt7+2YDFpqzVTDNj404Jp57nqKtT28ZpPBc3xqwHU7nHveXu+8t/8DZLjUhVTZK6MAAAAASUVORK5CYII="
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
