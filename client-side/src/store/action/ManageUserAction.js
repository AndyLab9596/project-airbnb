import manageUserApi from "../../api/manageUsersApi";
import { GET_USER_LIST } from "../types/AdminType";
import { createAction } from "./createAction/createAction";

export const getListUser = () => {
  return async (dispatch) => {
    try {
      const res = await manageUserApi.getAll();
      const usersPerPage = 10;
      const numberOfPages = Math.ceil(res.length / usersPerPage);
      const newData = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * usersPerPage;
        return res.slice(start, start + usersPerPage);
      });

      dispatch(
        createAction(GET_USER_LIST, {
          totalPage: numberOfPages,
          content: newData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (idUser) => {
  return async () => {
    try {
      await manageUserApi.deleteUser(idUser);
    } catch (error) {
      console.log(error);
    }
  };
};
