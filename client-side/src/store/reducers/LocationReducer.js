import { CREATE_LOCATION, GET_LOCATIONS } from '../types/LocationType'

const initialState = {
    locations: [],
    createLocation: []
}

const LocationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_LOCATIONS: {

            return { ...state, locations: payload }
        }
        case CREATE_LOCATION: {

            return { ...state, createLocation: payload }
        }

        default:
            return { ...state }
    }

}

export default LocationReducer