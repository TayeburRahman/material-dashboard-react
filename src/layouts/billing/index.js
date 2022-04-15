// @mui material components
import { Icon } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
// Watch Selling App React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Footer from "examples/Footer";
// Watch Selling App React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Invoices from "layouts/billing/components/Invoices";
// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";





function Billing() {
  const [product, setAllProduct] = useState([{}]);  
  const [isDelete, setIsDelete] = useState(false);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

   useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [isDelete]);

  const handleDeleteOrders = (id) => {
      console.log(id)
    const url = `https://pacific-escarpment-27904.herokuapp.com/deleteProduct/${id}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("dltId", result);
            if (result.deletedCount) {
              setIsDelete(true);
            } else {
              setIsDelete(false);
            }
          });
      }
    });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="Watch"
                    description="Freelance Payment" 
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="Haylou"
                    description="Freelance Payment" 
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive" 
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    // value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}> 
            { product.map((pd,idx)=>(
               <Grid item xs={12} md={6} key={pd._id}>
                   <MDBox className="p-4" width="100%" display="flex" flexDirection="column" bgColor={darkMode ? "transparent" : "grey-100"}>
                    <Box> 
                      <img
                        src={pd.img}  
                        loading="lazy"
                        width="20%"
                      /> 
         
                    </Box>
                    <Box>
                    <MDBox
                     display="flex"
                     justifyContent="space-between"
                     alignItems={{ xs: "flex-start", sm: "center" }}
                     flexDirection={{ xs: "column", sm: "row" }}
                     mb={2}
                   >
                     <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                       {pd.name}
                     </MDTypography>
           
                     <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
                       <MDBox mr={1}>
                         <MDButton variant="text" color="error" onClick={() => handleDeleteOrders(pd._id)} >
                           <Icon>delete</Icon>&nbsp;delete
                         </MDButton>
                       </MDBox>
                       <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                         <Icon>edit</Icon>&nbsp;edit
                       </MDButton>
                     </MDBox>
                   </MDBox>
                   <MDBox mb={1} lineHeight={0}>
                     <MDTypography variant="caption" color="text">
                       Rating:&nbsp;&nbsp;&nbsp;
                       <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                        {pd.rating}
                       </MDTypography>
                     </MDTypography>
                   </MDBox>
                   <MDBox mb={1} lineHeight={0}>
                     <MDTypography variant="caption" color="text">
                       Old Price:&nbsp;&nbsp;&nbsp;
                       <MDTypography variant="caption" fontWeight="medium">
                         {pd.oldPrice} $
                       </MDTypography>
                     </MDTypography> <br></br> <br></br>
                     <MDTypography variant="caption" color="text">
                      Update Price:&nbsp;&nbsp;&nbsp;
                     <MDTypography variant="caption" fontWeight="medium">
                      {pd.updatePrice} $
                     </MDTypography>
                   </MDTypography>
                   </MDBox>
                   <MDTypography variant="caption" color="text">
                      Product id:&nbsp;&nbsp;&nbsp;
                     <MDTypography variant="caption" fontWeight="medium">
                      {pd._id}
                     </MDTypography>
                   </MDTypography>
                  </Box>
                </MDBox>
               </Grid> 
        ))
      }
             
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
