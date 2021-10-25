import manageLocationApi from "../../api/manageLocationApi";
import { CREATE_LOCATION, GET_LOCATIONS, UPDATE_LOCATION, UPLOAD_IMAGE } from "../types/LocationType";
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
    return async (dispatch) => {
        try {
            await manageLocationApi.deleteLocation(id);
            await dispatch(getLocations());
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
export const postUploadImageAction = (data, id) => {
    return async (dispatch) => {
        try {
            const res = await manageLocationApi.postUploadImageLocation(data, id);
            console.log(res);
            dispatch(createAction(UPLOAD_IMAGE, res));
        } catch (error) {
            console.log(error.response);
        }
    };
};

export const putUpdateLocationAction = (data, id) => {
    return async (dispatch) => {
        try {
            const res = await manageLocationApi.putUpdateLocation(data, id);
            console.log(res);
            dispatch(createAction(UPDATE_LOCATION, res));
        } catch (error) {
            console.log(error.response);
        }
    };
};




