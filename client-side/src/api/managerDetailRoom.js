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

  updateDetailRoom(idRoom, valueRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.put(url, valueRoom);
  },
  deleteRoom(idRoom) {
    const url = `rooms/${idRoom}`;
    return axiosClient.delete(url);
  },
  updateImageRoom(idRoom, fileData) {
    const url = `rooms/upload-image/${idRoom}`;
    return axiosClient.post(url, fileData);
  },
};
export default managerDetailRoom;
