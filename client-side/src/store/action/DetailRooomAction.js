import managerDetailRoom from "../../api/managerDetailRoom";

export const DetailRoomAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.getDetailRoom(idRoom);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};
