import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles({
  image: {
    background: `url(${"https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg"}) center/55% repeat-x #000`,
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 68,
      color: "white",
      fontWeight: "bold",
    },
    "& :last-child": {
      fontSize: 20,
      background: "white",
      fontWeight: "bold",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>MOHAMMAD SOHAN</Typography>
      </Box>
    </>
  );
};

export default Header;
