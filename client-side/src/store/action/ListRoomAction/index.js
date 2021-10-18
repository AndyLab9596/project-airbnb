
import manageRentApi from "../../../api/manageRentApi";
import { GET_LISTROOM } from "../../types/ListRoomType";
import { createAction } from "../createAction/createAction";


export const getListRoomAction = (id) => {
    return async (dispatch) => {
        try {
            const res = await manageRentApi.getRentRooms(id);

            dispatch((createAction(GET_LISTROOM, res)))

        } catch (error) {
            console.log(error);
        }
    };
};


