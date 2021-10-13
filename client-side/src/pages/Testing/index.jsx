import React from 'react';
import { useLocation, useParams } from 'react-router';
import queryString from 'query-string'

const Testing = () => {
    const location = useLocation();
    console.log('location', location);
    const params = useParams();
    console.log('params', params);

    // const queryParams = queryString.parse(location);
    const queryParams = () => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _checkIn: params._checkIn,
            _checkOut: params._checkOut,
            _adult: Number.parseInt(params._adult),
            _baby: Number.parseInt(params._baby),
            _toddler: Number.parseInt(params._toddler),
        }
    }
    console.log(queryParams())

    return (
        <div>
            <h3>Location</h3>

        </div>
    );
};

export default Testing;