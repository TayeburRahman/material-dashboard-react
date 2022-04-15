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

// Watch Selling App React helper functions
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";
// Watch Selling App React base styles
import colors from "assets/theme/base/colors";
import pxToRem from "assets/theme/functions/pxToRem";


const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
