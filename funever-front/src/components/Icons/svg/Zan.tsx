import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 28 26" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 0V26H0V0H28V0Z"
      fill="url(#zan)"
    />
    <defs>
      <pattern
        id="zan"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_0_67" transform="scale(0.0357143 0.0384615)" />
      </pattern>
      <image
        id="image0_0_67"
        width="28"
        height="26"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAABHNCSVQICAgIfAhkiAAAA3ZJREFUSImtll9oW2UYxn/vlz8dXVdX6yqjFUVwUCaCuImuTvBqTMEJ0orKHEloTpqODhWlXnlE8HZD16Qn3RI78MKKiCBj4oXCXDcYjrGLXYh0rMPNTsdEutolOd/rRZKStF2b1D435/A+57y/53x8f47QoCYmJgK3/r7Ti+rzQAHh5EA8+n2970sjMM/zmq2GTiHsXmSNJ+KRiIjoaj1MI0Bfgh8j7Fb0V0TeEpFB4C/ggOdl99fTI9gIUFReK5P3DiQjUwAp79hVwXynIvuBE6v1qPsLXdc1QCfwZzIZnarUH2hr/QGwINvr6VM3cEtX16OlO71RXe/r68sDt0A71hVofHkdQDCnl7HDgF03YCYzvg3kfQBfOFbteZ7XDNwH3Kyn16qTJjX2+VO+9b8FWoBPB+ORi9W+L6Fd5cWgae+4W+0p3AnAWceJ/VwDPJzLbW7K2zcFtlQMEXP7j+tXR4zVjxQ6Qb5ub9v43uJAxkq3lohdIB9We0JpnNOZ7EmjhV7HceaCruuaDXk9DfJ4TTpVOjofvmDUvONTPJHoj3y13MJubg5kZ+eKt8XoktFSax5EcET1RSV0GHBkZCT7kAkyDUwp+lkpmbwB7MTKCwMDkZ+WDnT98jxvqyX0GxA0FNqMMRIoe9eSTuxI0okdAS7/H0i1HMe5gXIJCFsb7mhop0l72bdR9hTys/uGhobuVnspL9crYg8Fxb7a398/U6mrqoxmco8BvjH5mw3tpcA+hD2h0Katiw1BX0Klp1gMdteETGe3Ae3ARcdx5hoCinAOuGxMfsmaE9VzwLQf8q/U1IOmp3x7FhrcvBPx6DAwvKyXiI0Co0sM1WdLgZhsGFhRevR4Ro00Fedn4+Fw63Nq9BMLBwfjkfPLPN4DIBI4s2YgIjtEeTLc1PKyYltRjBHtAmqAqdQXbXC3G7juOAemocEDuCJD4BVFTym0gMwoenAgHvtmyYPB+WcABM4slNYCLKfd67qucV33nqeEqPQAaHnClMIuIxX9B8CY0vVeWgkGILCrDJlcEdiyIfSBGrPDcaIXVmq4ko4eHW+38DQwD4WFPpJO5x7B6BXQS1hzaK2Aaolwv4oOAzsFcgknGq14QWPyv1tCMyBPYPTH9QBWHSm/WL/p3ZowACNjY93GBpLApnUBivwrMNm+eeOX5X+eBf0HHas1Pmu7vMcAAAAASUVORK5CYII="
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
