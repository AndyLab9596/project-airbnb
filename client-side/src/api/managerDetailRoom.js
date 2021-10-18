import axiosClient from "./axiosClient";
const managerDetailRoom = {
  getDetailRoom(idRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.get(url);
  },
};
export default managerDetailRoom;
