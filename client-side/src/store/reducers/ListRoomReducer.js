import {

} from "../types/AuthType";
import { GET_LISTROOM } from "../types/ListRoomType";

const initialState = {
    arrListRoom: []
};

const ListRoomReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LISTROOM: {
            return { ...state, arrListRoom: payload }
        }

        default:
            return { ...state };
    }
};

export default ListRoomReducer;
