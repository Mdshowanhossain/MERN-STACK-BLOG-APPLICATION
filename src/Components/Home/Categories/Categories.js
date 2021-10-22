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

const useStyles = makeStyles({
  categoryContainer: {
    margin: " 0 10px 0 0",
    padding: "10px",
    border: "1px solid #9E9E9E",
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
});

const Categories = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.categoryContainer}>
        <Box className={classes.button}>
          <Button variant="contained">Create Blog</Button>
        </Box>

        <Table>
          <Box className={classes.allcategory}>
            <TableHead>
              <TableRow>
                <TableCell>All Categories</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Music</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Song</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Song</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Song</TableCell>
              </TableRow>
            </TableHead>
          </Box>

          {/* <TableBody>
          <TableRow>
            <TableRow>
              <TableCell>Music</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Music</TableCell>
            </TableRow>
          </TableRow>
        </TableBody> */}
        </Table>
      </Box>
    </>
  );
};

export default Categories;
