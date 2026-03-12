import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 15 19" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0V19H0V0H15V0Z"
      fill="url(#popular)"
    />
    <defs>
      <pattern
        id="popular"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_0_33" transform="scale(0.0666667 0.0526316)" />
      </pattern>
      <image
        id="image0_0_33"
        width="15"
        height="19"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAABHNCSVQICAgIfAhkiAAAAZdJREFUOI2Vk01rU0EUhp93ek3Ez9rUbkUEgxDsXoQWbJubgIrgj3DjIgi5FlwERZAGxIX0J7io6xalbrrtolvBXV3YFk2CBUGqM8dFmou59OP27Oad87zvGQ4DR9SPp9WZTrP28LB7d5BooF4Sv3amVZxVTgR3k7hh0Og7mXLDu/N3SoLng7NQKTfsfXQPOJsKZuPpRPNxvZPELw6FTUwPCeImQDep3SWwLKgPwQbqNOdm+826OmynG9+bcRlskFjpJjMXU7ibVFtO7m0/mgvZaSLpJXB9/1iQogcA+tmojvmCtoCCd648EsISMJk1yDxlbezVh2nni6oCBYARb40joUEZU70n9SuRjGuWOtoj4HcuPvIVZ1jI6KdzwcI70Ndco2bhEG26v8F9AuzY7v9LbI4vLH92E+2VbcS7E7FBb2B/zz74ptBOvlDWR8+cW0zhywur3xRCHdg+ht34E9x9td7vpTDAaPvjxikfJhGLwG4G2sL07Nfe+dsT7ZU04MC/ao9rxV7RypIu+cjvlIq3vqjVyq6Uf1fugCM5yScIAAAAAElFTkSuQmCC"
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
