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
  container: {
    // marginTop: 50,
  },
  table: {
    textAlign: "center",
    marginLeft: 20,
  },
});

const Categories = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Button variant="contained">Create Blog</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>All Categories</TableCell>
            </TableRow>
          </TableHead>

          <Box className={classes.table}>
            <TableBody>
              <TableRow>
                <TableRow>
                  <TableCell>Music</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Music</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Music</TableCell>
                </TableRow>
              </TableRow>
            </TableBody>
          </Box>
        </Table>
      </Box>
    </>
  );
};

export default Categories;
