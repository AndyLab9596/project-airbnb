import {

} from "../types/AuthType";
import { CLOSE_MODAL_FILTER, FILTER_PRICE, FILTER_ROOM, GET_LISTROOM, OPEN_MODAL_FILTER } from "../types/ListRoomType";

const initialState = {
    arrListRoom: [],
    filter: [],

    modal: false
};

const ListRoomReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_LISTROOM: {
            return { ...state, arrListRoom: payload }
        }
        case FILTER_ROOM: {
            return { ...state, filter: payload }
        }
        case FILTER_PRICE: {
            return { ...state, filter: payload }
        }
        case OPEN_MODAL_FILTER: {
            return { ...state, modal: true }
        }
        case CLOSE_MODAL_FILTER: {
            return { ...state, modal: false }
        }
        default:
            return { ...state };
    }
};

export default ListRoomReducer;
