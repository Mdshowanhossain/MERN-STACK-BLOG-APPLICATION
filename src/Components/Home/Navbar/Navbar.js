import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#ffff",
    color: "#000000",
    justifyContent: "center",
    "& > * ": {
      padding: 20,
      textDecoration: "none",
      color: "#000000",
    },
  },
  container: {},
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.component}>
        <Link to="/">
          <Typography variant="">HOME</Typography>
        </Link>
        <Link to="/about">
          <Typography variant="">ABOUT</Typography>
        </Link>
        <Link to="/contact">
          <Typography variant="">CONTACT</Typography>
        </Link>
        <Link to="/login">
          <Typography variant="">LOGIN</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
