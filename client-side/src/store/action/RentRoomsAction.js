import manageRentApi from "../../api/manageRentApi";
import { createAction } from "./createAction/createAction";
import { GET_LISTROOM, DETAIL_ROOM, DETAIL_RATING_ROOM, PAY_BOOKING_ROOM, GET_LIST_ROOM_PAGINATE } from "../types/ListRoomType";
import managerDetailRoom from "../../api/managerDetailRoom";
import manageMapboxApi from "../../api/manageMapboxApi";

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

export const getRentRoomPaginateAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await manageRentApi.getRentRooms(id);
      const paginate = (data) => {
        const itemsPerPage = 4;
        const numberOfPages = Math.ceil(data.length / itemsPerPage);
        const newData = Array.from({ length: numberOfPages }, (_, index) => {
          const start = index * itemsPerPage;
          return data.slice(start, start + itemsPerPage);
        });
        return newData;
      };
      const newRes = paginate(res)
      dispatch(createAction(GET_LIST_ROOM_PAGINATE, newRes))

    } catch (error) {
      console.log(error)
    }
  }
}

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
