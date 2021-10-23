import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Category } from "../FakeData/Catagory";

const useStyles = makeStyles({
  categoryContainer: {
    margin: " 0 10px 0 0",
    padding: "10px",
    border: "1px solid #878787",
  },
  button: {
    // alignItems: "center",
    marginLeft: "80px",
  },
  table: {
    // textAlign: "center",
    // marginLeft: 20,
  },
  allcategory: {
    marginLeft: "80px",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
});

const Categories = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.categoryContainer}>
        <Box className={classes.button}>
          <Link style={{ textDecoration: "none" }} to="/createpost">
            <Button variant="contained">Create Blog</Button>
          </Link>
        </Box>

        <Table>
          <Box className={classes.allcategory}>
            <TableHead>
              <TableRow>
                <Link className={classes.link} to="/">
                  <TableCell>All Categories</TableCell>
                </Link>
              </TableRow>

              {Category.map((data, index) => (
                <TableRow key={index}>
                  <Link className={classes.link} to={`category=${data}`}>
                    <TableCell>{data}</TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableHead>
          </Box>
        </Table>
      </Box>
    </>
  );
};

export default Categories;
