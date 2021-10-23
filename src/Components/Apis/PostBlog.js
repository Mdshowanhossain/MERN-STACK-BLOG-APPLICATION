import axios from "axios";

const URL = "http://localhost:8000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${URL}/create`, post);
  } catch (err) {
    console.error("Error While Create Post", err);
  }
};

export const getAllPost = async () => {
  try {
    return await axios.get(`${URL}/posts`);
  } catch (err) {
    console.log("Error While Get All Post", err);
  }
};

// export const getAllPost = async (param) => {
//   try {
//     let response = await axios.get(`${URL}/posts${param}`);
//     return response;
//   } catch (err) {
//     console.log("Error While Get All Post", err);
//   }
// };

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response;
  } catch (err) {
    console.log("Error while Get Specific Post", err);
  }
};

export const updatePost = async (id) => {
  try {
    let response = await axios.get(`${URL}/post/${id}`);
    return response;
  } catch (err) {
    console.log("Error While Update Post", err);
  }
};
export const updateData = async (id, post) => {
  try {
    let response = await axios.post(`${URL}/updateblog/${id}`, post);
    return response;
  } catch (err) {
    console.log("Error While Updating Your Post", err);
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/delete/${id}`);
  } catch (err) {
    console.log("Error From While Deleted", err);
  }
};
