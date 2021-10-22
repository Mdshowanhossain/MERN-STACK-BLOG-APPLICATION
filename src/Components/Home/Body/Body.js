import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Categories from "../Categories/Categories";
import Post from "../Post/Post";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: 10,
    margin: 10,
    // alignItems: "center",
    justifyContent: "space-between",
  },
  categories: {
    flex: 2,
  },
  post: {
    flex: 9,
  },
});

const Body = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.categories}>
          <Categories />
        </Box>
        <Box className={classes.post}>
          <Post />
        </Box>
      </Box>
    </>
  );
};

export default Body;
