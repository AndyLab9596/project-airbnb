import manageLocationApi from "../../api/manageLocationApi";
import { GET_LOCATIONS } from "../types/LocationType";
import { createAction } from "./createAction/createAction";

export const getLocations = () => {
    return async (dispatch) => {
        try {
            const res = await manageLocationApi.getAll();
            dispatch(createAction(GET_LOCATIONS, res))

        } catch (error) {
            console.log(error);
        }
    };
};



