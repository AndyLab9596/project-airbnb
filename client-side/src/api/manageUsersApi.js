import axiosClient from "./axiosClient";

const manageUserApi = {
  getAll() {
    const url = "/users/pagination";
    return axiosClient.get(url);
  },
  deleteUser(idUser) {
    const url = `/users/${idUser}`;
    return axiosClient.delete(url);
  },
};

export default manageUserApi;
