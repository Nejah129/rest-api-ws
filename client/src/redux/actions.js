import axios from "axios";
import { ADD, DELETE, EDIT_USER, GET } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/user/delete/${_id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNewUserNew = (name, number, email) => async (dispatch) => {
  const newUser = { name, email, number };
  try {
    const res = await axios.post("/add", newUser);
    dispatch({
      type: ADD,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editUserOneAction = (editedUser) => async (dispatch) => {

  try {
    const res = await axios.put(`/user/edit/${editedUser._id}`,editedUser);
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
    console.log(error)

  }
};
