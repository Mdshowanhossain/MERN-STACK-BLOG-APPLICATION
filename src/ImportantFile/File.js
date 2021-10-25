// import {
//   Button,
//   FormControl,
//   InputBase,
//   TextareaAutosize,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { Box } from "@mui/system";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import React, { useEffect, useState } from "react";

// import { createPost, uploadData } from "../Apis/PostBlog.js";
// import { useHistory } from "react-router";

// const useStyles = makeStyles({
//   container: {
//     padding: "0 170px",
//   },
//   img: {
//     width: "100%",
//     height: "60vh",
//     objectFit: "cover",
//   },
//   textField: {
//     flex: 1,
//     margin: "0 30px",
//   },
//   textarea: {
//     width: "100%",
//     marginTop: 50,
//   },
// });

// const initialValues = {
//   title: "",
//   description: "",
//   image: Date.now(),
//   username: "",
//   category: "",
//   createdDate: new Date(),
// };

// const CreatePost = () => {
//   const classes = useStyles();
//   const url = post.image
//     ? post.image
//     : "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";

//   const [post, setPost] = useState(initialValues);
//   const [file, setFile] = useState("");
//   const [image, setImage] = useState("");
//   const history = useHistory();

//   const handleChange = (e) => {
//     setPost({ ...post, [e.target.name]: e.target.value });
//   };

//   const savePost = async () => {
//     await createPost(post);
//     history.push("/");
//   };

//   const getImage = async () => {
//     console.log(file);
//     if (file) {
//       const data = new FormData();
//       data.append("name", file.name);
//       data.append("file", file);

//       const image = await uploadData(data);
//       post.image = image.data;
//       setImage(image.data);
//       console.log(post.image);
//     }
//   };

//   useEffect(() => {
//     getImage();
//   }, [file]);

//   return (
//     <>
//       <Box className={classes.container}>
//         <img className={classes.img} src={url} alt="" />

//         <FormControl
//           className={classes.form}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             flexDirection: "row",
//             marginTop: "15px",
//           }}
//         >
//           <label htmlFor="fileInput">
//             <AddCircleOutlineIcon
//               style={{ cursor: "pointer" }}
//               fontSize="large"
//               color="action"
//             />
//           </label>

//           <input
//             onChange={(e) => setFile(e.target.files[0])}
//             style={{ display: "none" }}
//             type="file"
//             id="fileInput"
//           />

//           <InputBase
//             placeholder="Title"
//             style={{ fontSize: 25 }}
//             className={classes.textField}
//             name="title"
//             onChange={(e) => handleChange(e)}
//           />
//           <Button onClick={() => savePost()} variant="contained">
//             Published
//           </Button>
//         </FormControl>

//         <TextareaAutosize
//           className={classes.textarea}
//           style={{
//             width: "100%",
//             marginTop: 50,
//             border: "none",
//             fontSize: 18,
//             outline: "none",
//           }}
//           rowsMin={5}
//           placeholder="Description"
//           name="description"
//           onChange={(e) => handleChange(e)}
//         />
//       </Box>
//     </>
//   );
// };

// export default CreatePost;

import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { createPost, uploadData } from "../Apis/PostBlog.js";
import { useHistory } from "react-router";
import "./CreatePost.css";
import { makeStyles } from "@mui/styles";

const CreatePost = () => {
  const initialValues = {
    title: "",
    description: "",
    image: "",
    username: "",
    category: "",
    createdDate: new Date(),
  };

  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async (e) => {
    e.preventDefault();
    console.log(post);

    await createPost(post);
    history.push("/");
  };

  const imageUpload = (e) => {
    console.log(e.target.files[0]);
    setPost({ ...post, image: e.target.files[0] });
  };

  const formData = new FormData();

  formData.append("image", post.image, post.image.name);
  formData.append("title", post.title);
  formData.append("name", post.description);

  const url =
    "https://i.postimg.cc/8kqgsf6G/kristin-wilson-z3htkd-HUh5w-unsplash.jpg";

  // const getImage = async () => {
  //   console.log(file);
  //   if (file) {
  //     // const data = new FormData();
  //     // data.append("name", file.name);
  //     // data.append("file", file);

  //     const image = await uploadData();
  //     post.image = image.data;
  //     setImage(image.data);
  //     console.log(post.image);
  //   }
  // };

  // useEffect(() => {
  //   getImage();
  // }, [file]);

  const useStyles = makeStyles({
    container: {
      padding: "0 170px",
    },
    img: {
      width: "100%",
      height: "60vh",
      objectFit: "cover",
    },
  });
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <img className={classes.img} src={url} alt="" />
        <form
          action=""
          style={{
            marginTop: "15px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label
              htmlFor="fileUpload"
              style={{ cursor: "pointer", fontSize: "50px" }}
            >
              <AddCircleOutlineIcon
                style={{ fontSize: "35px", color: "gray" }}
              />
            </label>
            <input
              onChange={imageUpload}
              type="file"
              name="image"
              id="fileUpload"
              style={{ display: "none" }}
            />

            <input
              placeholder="Title"
              type="text"
              name="title"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                padding: "13px",
                border: "none",
                outline: "none",
                fontSize: "25px",
                fontWeight: "500",
              }}
            />
          </div>
          <textarea
            placeholder="Description"
            name="description"
            onChange={(e) => handleChange(e)}
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "16px",
              border: "none",
              outline: "none",
              fontSize: "25px",
              fontWeight: "500",
            }}
          ></textarea>
          <Button
            style={{ float: "right", marginTop: "20px" }}
            type="submit"
            onClick={(e) => savePost(e)}
            variant="contained"
          >
            Published
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;

// <label htmlFor="fileInput">
// <AddCircleOutlineIcon
//   style={{ cursor: "pointer" }}
//   fontSize="large"
//   color="action"
// />
// </label>

// <input
// onChange={(e) => setFile(e.target.files[0])}
// style={{ display: "none" }}
// type="file"
// id="fileInput"
// />

// <input
// placeholder="Title"
// style={{ fontSize: 25 }}
// className={classes.textField}
// name="title"
// onChange={(e) => handleChange(e)}
// />
// <textarea
// className={classes.textarea}
// style={{
//   width: "100%",
//   marginTop: 50,
//   border: "none",
//   fontSize: 18,
//   outline: "none",
// }}
// rowsMin={5}
// placeholder="Description"
// name="description"
// // onChange={(e) => handleChange(e)}
// />

// <Button type="submit" onClick={() => savePost()} variant="contained">
// Published
// </Button>
