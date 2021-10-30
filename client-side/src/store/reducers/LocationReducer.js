import { CREATE_LOCATION, GET_LOCATIONS, RESET_DATA_LOCATION, UPLOAD_IMAGE, UPDATE_LOCATION, GET_LOCATION } from '../types/LocationType'

const initialState = {
    locations: [],
    createLocation: [],
 
    arrUpdate: [],
    location: {},
}

const LocationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_LOCATIONS: {

            return { ...state, locations: payload }
        }
        case CREATE_LOCATION: {

            return { ...state, createLocation: payload }
        }
        case UPLOAD_IMAGE: {

            return { ...state, activeStep: 2 }
        }
        case RESET_DATA_LOCATION: {

            return { ...state,  locations: [], createLocation: [], arrUpdate: [] }
        }
        case UPDATE_LOCATION: {

            return { ...state, arrUpdate: payload }
        }
        case GET_LOCATION: {

            return { ...state, location: payload }
        }
        default:
            return { ...state }
    }

}

export default LocationReducer