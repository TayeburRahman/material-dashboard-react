/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import AllOder from "Component/Page/AllOderProducts/AllOder";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Data
import data from "layouts/dashboard/components/Projects/data";
import { useEffect, useState } from "react";





function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);
  const [Products, setProduct] = useState([{}]);
  useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/allOder")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

 

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Total Selling Product 
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>{Products.length} Oder</strong> this month
            </MDTypography>
          </MDBox>
        </MDBox> 
      </MDBox>
      <MDBox>
        <AllOder></AllOder>
      </MDBox>
    </Card>
  );
}

export default Projects;
