import { CREATE_LOCATION, GET_LOCATIONS, RESET_DATA_LOCATION, UPLOAD_IMAGE } from '../types/LocationType'

const initialState = {
    locations: [],
    createLocation: [],
    activeStep: 0
}

const LocationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_LOCATIONS: {

            return { ...state, locations: payload }
        }
        case CREATE_LOCATION: {

            return { ...state, createLocation: payload, activeStep: 1 }
        }
        case UPLOAD_IMAGE: {

            return { ...state, activeStep: 2 }
        }
        case RESET_DATA_LOCATION: {

            return { ...state, activeStep: 0, locations: [], createLocation: [] }
        }


        default:
            return { ...state }
    }

}

export default LocationReducer