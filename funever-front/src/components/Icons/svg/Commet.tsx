import { Icon as ChakraIcon, IconProps } from "@chakra-ui/react";

const Icon = (props: IconProps) => (
  <ChakraIcon viewBox="0 0 28 28" {...props} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 0V28H0V0H28V0Z"
      fill="url(#commet)"
    />
    <defs>
      <pattern
        id="commet"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_0_41" transform="scale(0.0357143)" />
      </pattern>
      <image
        id="image0_0_41"
        width="28"
        height="28"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABHNCSVQICAgIfAhkiAAAA+hJREFUSIm1lk1IXGcUhp9z7/iXmWJK1RAwqaUWummzEBeFQmm3KbSL0E1l0BnGOyoYGmgXCdEbJZsEgrGdzFzNzNjBbloD6cJtyaK0EJpCcZvS1ghiYxolMyrxzj1dzE+GQauj9l3NfN9334dz7jnfPUINsm3b19re3mG6chwg79O1x0tLf9q27e7XQ/Y64DhOSx5fjyAfA+8A9VVHngM/K3rXxJ21LGv1QMBMJuPPbriXEIYF/MXlJwgLePwNgEEbylvAKwAKOZTJwDHf1WAwmNs3MJFInlGROaAT2BIkiXozlhV6ICJaeVZVxXFSXYjRq2gYaAQeiuq5aDT8257A+HTqAzy+BwKCzOddHRgaCj3aLROVisVSp0yfxBU9C2Qx+GggEvphV2Axsh+BgAijVqRvvDqivaSq4kynL6tyBciK6ruVkRqlH5lMxl9MY0CE0Wh/aKxWGICIaOFZRoGAisxlMplSDbwAZjfcS0CnIPNWpG+8VlC1rEjfuCDzQGfR+wXQcZwWhGFgK+/qwEEiq5aIaN7VAWALYdhxnJYysNBn+AVJ7rdA9qOhodAjQZIC/jy+njKw2NSg3sxRwcoqepYYYtu278TJ0zngWbS/r7WUzhs3vm3y+5/WW5a1Xu1RKoKdmttxnOZc7uXnFy58sgmFqk1MpR8DL60sL/qN1vb2DqAeYaEESySS4SZ/dt2jbi2eSE1UGt5y0hdzm+56btNdv+WkL1buxROpCY+6tSZ/dj2RSIah8C4RFoD61vb2DqN0EZevK0BFrgF1FHJx3nFmXi9FJugYYAKmoGOxWCwAMD09/RrC+aJFnYpcV1Wp9DZdOV5ui4OqsbFxzw8ARqFWPNNUI+/TteJiW2lfVL8Atot/Jy2r93covDNFRoA8kFdkJBwOPwOIRCJ/oNwsPrMtqp+X20ulDcATd/V/Lxrbto0TJ0//A9StLC82C0DcSd0D3hPV7mg0/MueKapBsal0t6F6H+HeQH/ofQNA0bsAiNF7lDAAQzVMAXIHio1v4s4q5BQNx2KpU0cFi8fTHUAvsKH5hm/KQMuyVlEmgUbTJ/FyOR9Wpk4ADaDXBwc/fVoGAgSO+a4CDxU960ynLx8JUHkTAE/nSktlYDAYzInqOSCrypXEVGrksJGK8F2BIh+W16oPHWbE+Or27VdNz7iJ0q3wwIB1hR7g1wEr1LUjEGofohKJZDeG0QuEgIYdLPMry4v1tm17Bx8TDYzCDaJngObi/ibotfy270ujwXsDz+sykLc9+GnQCn29a4SV2scgvIFwH+XOVr3MftbXt/ZffjUVReWo75mmiqtPVlb+Wqpl1P8X71LWk0nYHBEAAAAASUVORK5CYII="
      />
    </defs>
  </ChakraIcon>
);

export default Icon;
