import axiosClient from "./axiosClient";
const managerDetailRoom = {
  getDetailRoom(idRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.get(url);
  },
  getDetailRatingRoom(idRoom) {
    const url = `reviews/byRoom?roomId=${idRoom}`;
    return axiosClient.get(url);
  },
};
export default managerDetailRoom;
