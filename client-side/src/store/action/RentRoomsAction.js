import managerDetailRoom from "../../api/managerDetailRoom";
import manageRentApi from "../../api/manageRentApi";
import { DETAIL_RATING_ROOM, DETAIL_ROOM, GET_LISTROOM, PAY_BOOKING_ROOM } from "../types/ListRoomType";
import { createAction } from "./createAction/createAction";

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
      dispatch(createAction(DETAIL_RATING_ROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};
export const PayBookingAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await manageRentApi.postBookingRentRooms(data);
      console.log(res);
      dispatch(createAction(PAY_BOOKING_ROOM, res));
    } catch (error) {
      console.log(error.response);
    }
  };
};
