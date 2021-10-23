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

import { createPost, uploadData } from "../Apis/PostBlog.js";
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
  image: "",
  username: "",
  category: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const classes = useStyles();
  const url =
    "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };

  const getImage = async () => {
    console.log(file);
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      const image = await uploadData(data);
      post.image = image.data;
      console.log(post.image);
    }
  };

  useEffect(() => {
    getImage();
  }, [file]);

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
          <label htmlFor="fileInput">
            <AddCircleOutlineIcon
              style={{ cursor: "pointer" }}
              fontSize="large"
              color="action"
            />
          </label>

          <input
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
            type="file"
            id="fileInput"
          />

          <InputBase
            placeholder="Title"
            style={{ fontSize: 25 }}
            className={classes.textField}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <Button onClick={() => savePost()} variant="contained">
            Published
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
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </>
  );
};

export default CreatePost;
