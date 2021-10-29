import managerDetailRoom from "../../api/managerDetailRoom";
import manageRentApi from "../../api/manageRentApi";
import {
  DETAIL_RATING_ROOM,
  DETAIL_ROOM,
  GET_LISTROOM,
  NEW_ROOM,
} from "../types/ListRoomType";
import { createAction } from "./createAction/createAction";

export const getRentRoomsAction = (id) => {
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

export const AddRatingAction = (idRoom, content) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.addRatingRoom(idRoom, content);
      console.log(res);
      await dispatch(DetailRatingAction(idRoom));
    } catch (error) {
      console.log(error);
    }
  };
};
export const DeleteRatingAction = (idRoom, idRating) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.deleteRatingRoom(idRating);
      console.log(res);
      await dispatch(DetailRatingAction(idRoom));
    } catch (error) {
      console.log(error);
    }
  };
};
export const PayBookingAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await manageRentApi.postBookingRentRooms(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const UpdateDetailRoomAction = (idRoom, valueRoom, locaTionId) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.updateDetailRoom(idRoom, valueRoom);

      await dispatch(getRentRoomsAction(locaTionId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddRoomAction = (valueRoom, locaTionId) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.addRoom(valueRoom);
      dispatch(createAction(NEW_ROOM, res));
    } catch (error) {
      console.log(error);
    }
  };
};

export const UpdateImageRoomAction = (idRoom, fileData, locaTionId) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.updateImageRoom(idRoom, fileData);
      await dispatch(getRentRoomsAction(locaTionId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteRoomAction = (idRoom, locaTionId) => {
  return async (dispatch) => {
    try {
      const res = await managerDetailRoom.deleteRoom(idRoom);

      await dispatch(getRentRoomsAction(locaTionId));
    } catch (error) {
      console.log(error);
    }
  };
};
