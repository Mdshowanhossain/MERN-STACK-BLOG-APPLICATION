import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import Categories from "../Categories/Categories";
import Post from "../Post/Post";

const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: 10,
    margin: 30,
  },
  categories: {
    flex: 1,
  },
  post: {
    flex: 11,
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
