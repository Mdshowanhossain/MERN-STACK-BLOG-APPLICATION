import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import FakeData from "../FakeData/Card.js";
import { useLocation, Link } from "react-router-dom";
import { getAllPost } from "../../Apis/PostBlog.js";
const useStyles = makeStyles({
  postContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    margin: "0 0 20px 0",
  },
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
    "& :first-child": {
      textDecoration: "none",
    },
    "& :last-child": {
      textDecoration: "none",
    },
  },
});

const Post = () => {
  const classes = useStyles();
  const url =
    "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";

  const [posts, setPosts] = useState();
  const { search } = useLocation();

  const fetchData = async () => {
    let data = await getAllPost(search);
    setPosts(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box className={classes.postContainer}>
      {posts?.map((data) => (
        <Card className={classes.card} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={url}
          />
          <Box className={classes.categories}>
            <Typography variant="" component="div">
              Category: {data.category}
            </Typography>
            <Typography variant="" component="div">
              Author:{data.username}
            </Typography>
          </Box>

          <CardContent>
            <Box>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {data.title}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {data.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.read}>
            <Link to={`/readmore/${data._id}`}>
              <Button size="small">Share</Button>
            </Link>
            <Link to={`/readmore/${data._id}`}>
              <Button size="small">Read More</Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Post;
