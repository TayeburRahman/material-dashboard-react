import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../Firebase/Hooks/useAuth";
import logo from '../../image/logo-w.png';
import LoginModal from "../UserLogin/LoginModal";
import './header.css';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { user, logOut } = useAuth();
  const [Products, setProduct] = useState([{}]);



  useEffect(() => {
    fetch(`https://pacific-escarpment-27904.herokuapp.com/userOder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [user.email]);

  return (
    <div className="headers">
      <Navbar collapseOnSelect expand="lg" bg="" className="bg-colors" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="  text-color-tag">
          <img src={logo} width={120} alt="BigCo Inc. logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: "dimgray"}} />
          <Navbar.Collapse id="responsive-navbar-nav " className="mt-2">
            <Nav className="me-auto text-color-mnu"
            style={{alignItems: "center"}}
            >
              <Nav.Link as={HashLink} to="/home" className="text-color-mnu">
                <h6 className="text-color-mnu">HOME</h6>
              </Nav.Link>
              <Nav.Link as={HashLink} to="/aLLProduct" className="text-color-mnu">
              <h6 className="text-color-mnu">CATEGORY</h6> 
              </Nav.Link>
              <NavDropdown title="DASHBOARD" className="text-color-mnu" id="collasible-nav-dropdown"
              style={{marginTop: "-8px"}}
              >
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/dashboard" >
                <h6>Dashboard</h6> 
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/dashboard/myOrders">
                <h6>Your Orders</h6>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item as={HashLink} className="Dropdown" to="/register">
                <h6>Register Now</h6>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={HashLink}  to="/aboutUs"  className="text-color-mnu">
              <h6 className="text-color-mnu">ABOUT US </h6> 
              </Nav.Link>
            
            </Nav>
            <Nav>
               <div className="d-flex right-sec-heder">
               <div className="cart d-grid" style={{alignItems: 'center', height: '40px', width: '40px'}}>
               <Link to="/dashboard/myOrders"> 
              <ShoppingCartIcon style={{fontSize: '200%', color:'darkgoldenrod'}}/>
              <div className="cartIcons">{Products?.length}</div>
               </Link>
              </div>
              {user?.email ? (
                <Button onClick={logOut} variant="text">
                  <LogoutIcon  style={{fontSize: "200%",color: "darkgoldenrod", fontWeight:"700"}}/>
                 
                </Button>
              ) : (
                <Button onClick={handleOpen} variant="text"
                style={{color:'darkgoldenrod'}}
                >
                  LOGIN
                </Button>
              )}
               </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal open={open} handleClose={handleClose}></LoginModal>
    </div>
  );
};

export default Header;
