import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Firebase/Hooks/useAuth";

const AllOder = () => {
  const { user } = useAuth();
  const email = user.email;
  const [Products, setProduct] = useState([{}]);
  const [isDelete, setIsDelete] = useState(false);
  console.log("Products", Products);

  useEffect(() => {
    fetch("https://pacific-escarpment-27904.herokuapp.com/allOder")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [email, isDelete]);

  const handleDeleteOrders = (id) => {
    const url = `https://pacific-escarpment-27904.herokuapp.com/userOder/${id}`;
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
    <div className=""> 
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
          <TableBody>
            {Products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                style={{fontFamily:'monospace'}}
              >
                <TableCell component="th" scope="row">
                  <ListItemAvatar align="right">
                    <Avatar alt="Remy Sharp" src={product.url} />
                  </ListItemAvatar>
                </TableCell>
                <TableCell  
                component="th" 
                scope="row"
                style={{color:'#3e435c',fontWeight:"600"}}
                >
                  {product.name}
                </TableCell>

                <TableCell 
                style={{color:'darkolivegreen',fontWeight:"600"}}
                >{product.price}</TableCell>
                <TableCell 
                style={{fontFamily:'monospace', color:'darkolivegreen'}}
                >{product.state}</TableCell>
                <TableCell  
                style={{fontFamily:'monospace'}}
                >
                  <Button
                    onClick={() => handleDeleteOrders(product._id)}
                    variant="outlined"
                    color="error"
                    style={{fontFamily:'system-ui',color:'red'}}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllOder;
