import manageAuthApi from "../../api/manageAuthApi";
import { USERID } from "../../constants/config";
import {
  GET_INFO_USER,
  HIDE_MODAL_SIGNIN,
  HIDE_MODAL_SIGNUP,
  SHOW_MODAL_SIGNIN
} from "../types/AuthType";
import { createAction } from "./createAction/createAction";

export const loginAction = (user) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.login(user);
      if (res.token) {
        dispatch(createAction(HIDE_MODAL_SIGNIN));
      }
<<<<<<< HEAD
      dispatch((createAction(GET_INFO_USER, res.user)))
      localStorage.setItem(USERID, res.user._id);
=======
      localStorage.setItem("idUser", res.data.user._id);
      console.log(res);
>>>>>>> 1bfaae01f24254019c9565fa93dbf2e176b31854
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAction = (user) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.register(user);
      if (res.token) {
        dispatch(createAction(HIDE_MODAL_SIGNUP));
        await dispatch(createAction(SHOW_MODAL_SIGNIN));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInfoUserAction = (idUser) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.getInfoUser(idUser);
      dispatch(createAction(GET_INFO_USER, res));
    } catch (error) {
      console.log(error);
    }
  };
};
