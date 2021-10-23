import manageLocationApi from "../../api/manageLocationApi";
import { CREATE_LOCATION, GET_LOCATIONS } from "../types/LocationType";
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
export const deleteLocationAction = (id) => {
    return async () => {
        try {
            await manageLocationApi.deleteLocation(id);
        } catch (error) {
            console.log(error);
        }
    };
};
export const CreateLocationAction = (data) => {
    return async (dispatch) => {
        try {
            const res = await manageLocationApi.postCreateLocation(data);
            console.log(res);
            dispatch(createAction(CREATE_LOCATION, res));
        } catch (error) {
            console.log(error.response);
        }
    };
};



