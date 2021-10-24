import manageUserApi from "../../api/manageUsersApi";
import { GET_USER_LIST } from "../types/AdminType";
import { createAction } from "./createAction/createAction";

export const getListUser = () => {
  return async (dispatch) => {
    try {
      const res = await manageUserApi.getAll();
      dispatch(createAction(GET_USER_LIST, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (idUser) => {
  return async (dispatch) => {
    try {
      await manageUserApi.deleteUser(idUser);
      await dispatch(getListUser());
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUserAction = (info) => {
  return async (dispatch) => {
    try {
      const res = await manageUserApi.addUser(info);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUserAction = (idUser, info) => {
  return async (dispatch) => {
    try {
      const res = await manageUserApi.editUser(idUser, info);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};
