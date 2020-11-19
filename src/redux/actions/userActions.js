import axios from "axios";
import {
  SET_USER,
  SET_ERRORS,
  LOADING_UI,
  LOADING_USER,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
} from "../types";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then((res) => {
      //gets token in res
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signUpUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      //gets token in res
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FbIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios.get("/user").then((res) => {
    dispatch({
      type: SET_USER,
      payload: res.data,
    });
  });
};

//backend is not functional
export const uploadImage = (formData) => (dispatch) => {
  // dispatch({ type: LOADING_USER });
  // axios
  //   .post("/user/image", formData)
  //   .then(() => {
  //     dispatch(getUserData());
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  console.log("IMAGE UPLOADED");
};

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => {
      console.log(err);
    });
};

const setAuthorizationHeader = (token) => {
  const FbIdToken = `Bearer ${token}`;
  localStorage.setItem("FbIdToken", FbIdToken);
  axios.defaults.headers.common["Authorization"] = FbIdToken;
};
