import {
  Button,
  FormControl,
  InputBase,
  TextareaAutosize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React, { useEffect, useState } from "react";
import { updatePost } from "../Apis/PostBlog";
import { updateData } from "./../Apis/PostBlog";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  container: {
    padding: "0 170px",
  },
  img: {
    width: "100%",
    height: "60vh",
    objectFit: "cover",
  },
  textField: {
    flex: 1,
    margin: "0 30px",
  },
  textarea: {
    width: "100%",
    marginTop: 50,
  },
});

const initialValues = {
  title: "",
  description: "",
  image: Math.floor(Math.random() * 20),
  username: "",
  category: "",
  createdDate: new Date(),
};

const UpdateBlog = ({ match }) => {
  const classes = useStyles();
  const url =
    "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";

  const [post, setPost] = useState(initialValues);
  const history = useHistory();

  const fetchData = async () => {
    const data = await updatePost(match.params.id);
    setPost(data.data);
    console.log("From Update", data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateBlog = async () => {
    await updateData(match.params.id, post);
    history.push(`/readmore/${match.params.id}`);
  };

  return (
    <>
      <Box className={classes.container}>
        <img className={classes.img} src={url} alt="" />
        <FormControl
          className={classes.form}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "15px",
          }}
        >
          <AddCircleOutlineIcon fontSize="large" color="action" />

          <InputBase
            placeholder="Title"
            style={{ fontSize: 25 }}
            className={classes.textField}
            value={post.title}
            onChange={(e) => handleChange(e)}
            name="title"
          />
          <Button onClick={() => updateBlog()} variant="contained">
            Update
          </Button>
        </FormControl>

        <TextareaAutosize
          className={classes.textarea}
          style={{
            width: "100%",
            marginTop: 50,
            border: "none",
            fontSize: 18,
            outline: "none",
          }}
          rowsMin={5}
          placeholder="Description"
          value={post.description}
          onChange={(e) => handleChange(e)}
          name="description"
        />
      </Box>
    </>
  );
};

export default UpdateBlog;
