/**
=========================================================
* Watch Selling App React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Watch Selling App React base styles
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";
import colors from "assets/theme-dark/base/colors";
import linearGradient from "assets/theme-dark/functions/linearGradient";
// Watch Selling App React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";


const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
