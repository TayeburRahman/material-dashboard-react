import MenuIcon from "@mui/icons-material/Menu";
import { Button, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Nav } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Firebase/Hooks/useAuth";
import logo from "../../../image/logo-w.png";
import AdminRoute from "../../../PrivateRoute/AdminRoute";
import DashbordBGImg from "../../DashbordHome/DashbordBGImg";
import MakeAdmin from "../../MakeAdmin/MakeAdmin";
import MnageAllProduct from "../../ManageProduct/MnageAllProduct";
import AddProduct from "../../Product/AddProduct";
import AllProductReview from "../../Review/AllProductReview";
import AllOder from "../AllOderProducts/AllOder";
import ManageAllOder from "../ManageAllOder/ManageAllOder";
import "./Dashboard.css";
 
const drawerWidth = 240;

function Dashboard(props) {
 
  const { user, admin, logOut } = useAuth();
   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="text-left p-4" 
    style={{margin:'-20px'}}
    >
       <Paper variant="outlined" style={{display:'grid',justifyItems: 'center'}}>
         <img src={logo} width={150} />
        </Paper>
      <Toolbar />

        <Box className="bg-color p-1"
        // style={{ background: 'cornflowerblue',  padding: '2px',  borderRadius: '2px'}}
        >
          <Link className="bg-color" to="/dashboard" style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text" 
            style={{    paddingTop: '21px'}}
            >
              Dashboard
            </Button>
          </Link>{" "}
          <hr />
          <Link to="/dashboard/myOrders" style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text">
              {" "}
              your Orders
            </Button>
          </Link>{" "}
          <hr />
          <Link to="/dashboard/review"  style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text"
            style={{    paddingBottom: '21px'}}
            >
              Product Review
            </Button>
          </Link>
        </Box>
      <br />
      {admin && (
        <Box className="bg-color p-1"
        style={{marginBottom: '20px ' , background: 'slategray',  padding: '2px',  borderRadius: '2px', }}
         >
          <Link
            to="/dashboard/manageAllOrders" 
            style={{ textDecoration: "none" }}
          >
            <Button className="text-light" variant="text"
            >
              Manage Orders
            </Button>
          </Link>{" "}
          <hr />
          <Link  
          to="/dashboard/addProduct" style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text">
              Add Product
            </Button>
          </Link>{" "}
          <hr />
          <Link 
            to="/dashboard/manageAllProduct" 
            style={{ textDecoration: "none" }}
          >
            <Button className="text-light" variant="text">
              Manage Product
            </Button>
          </Link>{" "}
          <hr />
          <Link  
          to="/dashboard/makeAdmin" style={{ textDecoration: "none" }}>
            <Button className="text-light" variant="text"
            style={{ paddingBottom: '21px'}}
            >
              Admin
            </Button>
          </Link>
        </Box>
      )} <br />
      <Link onClick={logOut}   class="button-log">
         Log Out
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="headers-ds">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"
          style={{color:'yellow'}}
          >
            DASHBOARD
          </Typography>
          <Nav className="me-auto text-color-mnu">
              <Nav.Link as={HashLink} to="/home" className="text-color-mnu">
                <p className="textndary mt-3 ms-5"
                style={{color:"floralwhite",  fontWeight:"500"}}
                >Go TO Home Page</p>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aLLProduct" className="text-color-mnu">
                <p className="textndary mt-3"
                style={{color:"floralwhite",  fontWeight:"500" }}
                > Add To Product </p>
              </Nav.Link>
            </Nav>
        </Toolbar>
         
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1, 
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Route exact path="/dashboard">
          <DashbordBGImg></DashbordBGImg>
        </Route>
        <Route path="/dashboard/myOrders">
          <AllOder></AllOder>
        </Route>
        <Route path="/dashboard/review">
          <AllProductReview></AllProductReview>
        </Route>
        <AdminRoute path="/dashboard/manageAllOrders">
          <ManageAllOder></ManageAllOder>
        </AdminRoute>
        <AdminRoute path="/dashboard/addProduct">
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path="/dashboard/manageAllProduct">
          <MnageAllProduct></MnageAllProduct>
        </AdminRoute>
        <AdminRoute path="/dashboard/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
