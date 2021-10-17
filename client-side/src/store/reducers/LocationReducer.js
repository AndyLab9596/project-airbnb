import { GET_LOCATIONS } from '../types/LocationType'

const initialState = {
    locations: [],
}

const LocationReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_LOCATIONS: {

            return { ...state, locations: payload }
        }

        default:
            return { ...state }
    }

}

export default LocationReducer