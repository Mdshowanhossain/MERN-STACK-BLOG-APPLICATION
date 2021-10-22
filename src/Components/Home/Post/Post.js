import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  categories: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    color: "#9E9E9E",
  },
  title: {
    textAlign: "center",
    fontWeightBold: 700,
  },
  read: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Post = () => {
  const classes = useStyles();

  const url =
    "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={url}
        />

        <Box className={classes.categories}>
          <Typography variant="" component="div">
            Category: Mohammad
          </Typography>
          <Typography variant="" component="div">
            Author:Sohan
          </Typography>
        </Box>

        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="div"
          >
            What is Lorem Ipsum?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className={classes.read}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
