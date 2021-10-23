import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deletePost, getPost } from "../Apis/PostBlog";

const useStyles = makeStyles({
  container: {
    padding: "0 100px",
  },
  img: {
    width: "100%",
    height: "60vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
    padding: "10px",
  },
  icon: {
    margin: 5,
    border: "1px solid #878787",
    padding: "2px",
    borderRadius: "4px",
    fontSize: "10px",
    cursor: "pointer",
  },
  heading: {},
  data: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#878787",
    marginBottom: "40px",
  },
  link: {
    textDecoration: "none",
    color: "#878787",
  },
});

const DetailView = ({ match }) => {
  const classes = useStyles();
  const url =
    "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";

  const history = useHistory();

  const [post, setPost] = useState({});

  const fetchData = async () => {
    let data = await getPost(match.params.id);
    setPost(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteBlog = async () => {
    await deletePost(post._id);
    history.push(`/readmore/`);
  };

  return (
    <>
      <Box className={classes.container}>
        <img className={classes.img} src={post.image || url} alt="" />
        <Box className={classes.icons}>
          <Link to={`/updateblog/${post._id}`}>
            <EditIcon color="primary" className={classes.icon} />
          </Link>

          <Link to={`/delete/${post._id}`}>
            <DeleteIcon
              onClick={() => deleteBlog()}
              color="error"
              className={classes.icon}
            />
          </Link>
        </Box>

        <Box
          style={{
            fontSize: "38px",
            fontWeight: 600,
            textAlign: "center",
            alignItems: "center",
            margin: "50px 0 10px 0",
          }}
        >
          <Typography variant={classes.heading}>{post.title}</Typography>
        </Box>

        <Box className={classes.data}>
          <Link className={classes.link} to={`/?username=${post.username}`}>
            <Typography>
              Author:{" "}
              <span style={{ fontWeight: "bold" }}>{post.username}</span>
            </Typography>
          </Link>

          <Typography>{new Date(post.createdDate).toDateString()}</Typography>
        </Box>

        <Typography>{post.description}</Typography>
      </Box>
    </>
  );
};

export default DetailView;
