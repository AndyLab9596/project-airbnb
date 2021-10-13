import manageAuthApi from "../../api/manageAuthApi";
import {
  GET_INFO_USER,
  HIDE_MODAL_SIGNIN,
  HIDE_MODAL_SIGNUP,
  SHOW_MODAL_SIGNIN,
} from "../types/AuthType";
import { createAction } from "./createAction/createAction";

export const loginAction = (user) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.login(user);
      if (res.status === 200) {
        dispatch(createAction(HIDE_MODAL_SIGNIN));
      }
      localStorage.setItem("idUser", res.data.user._id);
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAction = (user) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.register(user);
      if (res.status === 200) {
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
      const { data } = await manageAuthApi.getInfoUser(idUser);
      dispatch(createAction(GET_INFO_USER, data));
    } catch (error) {
      console.log(error);
    }
  };
};
