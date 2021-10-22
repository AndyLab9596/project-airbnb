import manageRentApi from "../../api/manageRentApi";
import { createAction } from "./createAction/createAction";
import { GET_LISTROOM, DETAIL_ROOM, DETAIL_RATING_ROOM } from "../types/ListRoomType";
import managerDetailRoom from "../../api/managerDetailRoom";

export const getRentRoomsAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await manageRentApi.getRentRooms(id);

      dispatch((createAction(GET_LISTROOM, res)))

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

export const DetailRatingAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.getDetailRatingRoom(idRoom);
      console.log(res);
      dispatch(createAction(DETAIL_RATING_ROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};
