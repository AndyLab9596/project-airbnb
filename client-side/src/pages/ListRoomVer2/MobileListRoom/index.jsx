import React from 'react';
import { useLocation, useParams } from 'react-router';
import Mapbox from '../Mapbox';
import useStyles from "./style";
import queryString from 'query-string';
import useFetch from '../useFetch';

const MobileListRoom = () => {
    const classes = useStyles();

    const location = useLocation();
    const params = queryString.parse(location.search);
    const province = params._location;
    const param = useParams();
    const locationId = param.locationId;
    const { loading, data } = useFetch(locationId);


    return (
        <div className={classes.root}>

            <div className={classes.content}>
                <div className={classes.map}>
                    <div className={classes.mapBox}>
                        <Mapbox
                            province={province}
                        // rentRooms={rentRooms} 
                        />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default MobileListRoom;