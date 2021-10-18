import manageRentApi from "../../api/manageRentApi";
import { createAction } from "./createAction/createAction";
import { GET_LISTROOM } from "../types/ListRoomType";

export const getRentRoomsAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await manageRentApi.getRentRooms(id);

            dispatch((createAction(GET_LISTROOM, res)))

        } catch (error) {
            console.log(error);
        }
    };
};


