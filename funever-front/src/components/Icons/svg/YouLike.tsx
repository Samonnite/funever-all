import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 22 13" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 0V13H0V0H22V0Z"
      fill="url(#youlike)"
    />
    <defs>
      <pattern
        id="youlike"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_0_30" transform="scale(0.0454545 0.0769231)" />
      </pattern>
      <image
        id="image0_0_30"
        width="22"
        height="13"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAANCAYAAACtpZ5jAAAABHNCSVQICAgIfAhkiAAAAa1JREFUOI2dkzFMU1EUhr9zX4HUQOA9dSEaFiaMxsUEBhJDYgqGzZE4aBidSGjp4gZ4dQBlcFcmnUyAUqkxMcEEF1mNmyAxaRAaB1p47x4HINj6ipVvuvf8Od85uckVjtgZv33dGXfHQEUJXwS28O04K02kuiPkPgAii+WWxOeWvf2MwKfA5heL6VudnvFGVLU14dx8+5OVrwLwMz2YRZjihIog477NzW1PpEZF5RmQPIk1A7IFvATyQC/QfhQWQ2euyXZ2sE8cH4lDZAHV4ZjkIPK0ywtlDeHy332kjThGYqVAHSlAUyKUGyK6Et8nHQa4VFd8Or6KlGMTw5IBNs9iFSMbKD21dUVng+ncqhHMqzN4f4Se9wXorxoGM4HNjwEY3y59EHj9X9uijy5MLnwHfQgosAPc9e3ymBzeMQCVyN0DXW/Q+74j2TcHENj8lFPvSqTNXYFdnq/Z/pBf2aGLB07fAVfrO3UdopuBLZT+Nd0cH9qmc0UI+0HX4p2sNiqtEgMEtlAqJ5sHgDc11uf+ubaBRqXwx1NUL4fsZoYeKJpSdU/PP34b/xFO4TcvhJkQ+uAXCAAAAABJRU5ErkJggg=="
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
