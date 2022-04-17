
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// Watch Selling App React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
// Watch Selling App React context
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
import OpenAddProduct from "./OpenAddProduct";




function PaymentMethod() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [controller] = useMaterialUIController();
  const [product, setAllProduct] = useState([{}]); 
  const [orders, setOrders] = useState([{}]); 

  useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/allOder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);


  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          All Product
        </MDTypography>
        <MDButton variant="gradient" color="dark" onClick={handleOpen}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new Product
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox component="img" src="https://logos.flamingtext.com/Word-Logos/product-design-sketch-name.png" alt="master card" width="20%" mr={2} />
              <MDTypography variant="h6" fontWeight="medium">
                Total Product
              </MDTypography>
              <MDTypography variant="h6" fontWeight="medium">
                {product.length}
              </MDTypography>
              
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox component="img" src="https://i.ibb.co/9t27461/istockphoto-1266252971-170667a.jpg" alt="master card" width="12%" mr={2} />
              <MDTypography variant="h6" fontWeight="medium">
                Total Sell
              </MDTypography> 
              <MDTypography variant="h6" fontWeight="medium">
                {orders.length}
              </MDTypography> 
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <OpenAddProduct open={open} handleOpen={handleOpen}  handleClose={handleClose}></OpenAddProduct>
    </Card>
  );
}

export default PaymentMethod;
