import managerDetailRoom from "../../../api/managerDetailRoom";
import manageRentApi from "../../../api/manageRentApi";
import { DETAIL_ROOM, GET_LISTROOM } from "../../types/ListRoomType";
import { createAction } from "../createAction/createAction";

export const getListRoomAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await manageRentApi.getRentRooms(id);

      dispatch(createAction(GET_LISTROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const DetailRoomAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.getDetailRoom(idRoom);
      dispatch(createAction(DETAIL_ROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};
