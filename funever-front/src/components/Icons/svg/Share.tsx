import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 28 28" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 0V28H0V0H28V0Z"
      fill="url(#share)"
    />
    <defs>
      <pattern
        id="share"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_0_40" transform="scale(0.0357143)" />
      </pattern>
      <image
        id="image0_0_40"
        width="28"
        height="28"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABHNCSVQICAgIfAhkiAAAA/VJREFUSImllktoXGUUgL/z37khbaMuEjWKVpCIuCi1LULtwhe+oFbtpqWL1k4nk9vkUmgD0m0XbuKqlU6S24xJLApmRCJuKiKoBSlKDbYGdVHwgWIqmVRM0oeT+x8Xc28ymWcSz+r+55x7vvO/zn+EVUomM9KurrS6euuq53nTq/1fGgMyLY7TvBcxuxV9ArgNQGHeNeGmdDr982qAiVqGIAjckMRRQY4rtIKWZ7qhoM5G4P8DM9lshw3NmMDWMtMV0IuoXBX0+24v9SXA4ODbm9WwBWRarObBTLuunUqlUrPlsSuWtH9odJtY+wnQFqkKgpwROO15yZ/K/YMgaLO4vwHrquT+2Y35lpd7e/fcqDrDTDbbIeEy2CVrwn1+Ov1jtZUAuN7UtND8r2oN87PNG+b2AO/EClOSqWtCMxbDBD43FHbUgwEcSyb/1pBNquwX+K7cblRuXzaOP0ISR1nas8n16xK7PM+7Xg8WS1tby+8i+rzCo+U2K+QrgJlMpkWQ4zHbiuw/cODA/EpgQRCsz8/MnQPZHzOAS7FdRCuBjtO8F2iNdO/6XcmKpakmuVzOCXHfR3gmUs2q6EvAB7GPillWHIpLKmZ3iWJgJTCA/LX5NwR2RcN/DDzX05U6p8jiIXLsrV8rgFEFAZju6kp+sxLYwMDIU6DxNhSw8ornHfoaoMkJB1FOKRwsL3+SyYy0m4T+CSDIp4e95AuNYLlcril/bW4SeChK+FiPlzpZyz9zZngHxv7ld3ZeMepKvHcoRXAjmZmZ92IYwhfdXYdO1fLtD0ZeNcpXJjSX3xoevtPUcqwlJ06cSKjo69EwJLRHRKTWxUdgc/S5ziyYu4wUSo6tcG8jYHv7xp3A/QAoH3Z3d07W/0PvXgxf0Lzx/eQUMBsF2KKqdZ8sa5bKmDrmzUYJ6lIxmfX95JQBEOR8pGwLguHt9QL0dKU+FrVPGtjekz74bT3fIAjuEXislFEs3mrHEdlZzMj4wIV6gQ4f7jxfzx6LJeER33W148SDMLw5BlHNE93XPzS6bSUB68nQ0NB9IL3RMB8xikDf9+cU7YuMRqx9LwiCO9YKC4LADa1zlsV2RPt8359bBAI4LJwEJqLhw1bcj9YCzeVyTRZ3VOHpSDURxQbKXvxMNtthQnOBpQf4BzXOvp70a5dXAjudzT7ghM5ZSkqldezjfmfnlapAqNpihKgOq5M4XQvc3z/8oDh4wBGWWo1pNebF8pNc9c5FMx2json6BeEilj+i39sQ3Qo8UuY3YR27t3RmdYGwvE1k6a1sJHlF+xwWTnqeV6jmsOZGuERmBTmP2vEwvDkWn8Za0hBYmUCx1YdibYxK44rlP7S0lqjR/tKQAAAAAElFTkSuQmCC"
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
