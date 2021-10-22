import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#ffff",
    color: "#000000",
    justifyContent: "center",
    "& > * ": {
      padding: 20,
    },
  },
  container: {},
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.component}>
        <Typography variant="">HOME</Typography>
        <Typography variant="">ABOUT</Typography>
        <Typography variant="">CONTACT</Typography>
        <Typography variant="">LOGIN</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
