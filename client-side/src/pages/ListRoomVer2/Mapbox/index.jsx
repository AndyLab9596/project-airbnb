import React, { useEffect, useState } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import manageMapboxApi from '../../../api/manageMapboxApi';
import { MAPBOX_TOKEN } from '../../../constants/config';
import Pin from '../Pin';
import useStyles from "./style";

const Mapbox = (props) => {
    const { rentRooms, province, handleChangePage } = props;

    const classes = useStyles();
    const [markerLocation, setMarkerLocation] = useState([]);


    const [viewport, setViewport] = useState({
        longitude: 0,
        latitude: 0,
        zoom: 12,
    });

    const getLocationParams = {
        access_token: MAPBOX_TOKEN,
        country: 'vn',
    };

    const getMarkerParams = {
        access_token: MAPBOX_TOKEN,
        country: 'vn',
        proximity: `${viewport.longitude},${viewport.latitude}`,
        limit: rentRooms.length
    };


    useEffect(() => {
        (async () => {
            try {
                const res = await manageMapboxApi.getLocation(province, getLocationParams)
                setViewport({ ...viewport, longitude: res.data.features?.[0]?.center?.[0], latitude: res.data.features?.[0]?.center?.[1] })

            } catch (error) {
                console.log(error)
            }
        })()
    }, [province])

    useEffect(() => {
        let newMarkerLocation = [];
        (async () => {
            try {
                for (let i = 0; i < rentRooms.length; i++) {
                    const res = await manageMapboxApi.getMarker(rentRooms[i].name, getMarkerParams)
                    newMarkerLocation[i] = { ...rentRooms[i], longitude: res.data.features?.[0].center?.[0], latitude: res.data.features?.[0].center?.[1] }
                }
                setMarkerLocation(newMarkerLocation)
            } catch (error) {
                console.log(error.response)
            }
        })()
    }, [rentRooms])

    const navControlStyle = {
        right: 10,
        top: 100
    };

    return (
        <ReactMapGL
            {...viewport}
            className={classes.ReactMapGL}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/thienvy95/ckuvywfwtntgx17pr1vnuxbj8"
            mapboxApiAccessToken="pk.eyJ1IjoidGhpZW52eTk1IiwiYSI6ImNrdXFkcTlycjByem8yeHBnbXVmNmwwMzQifQ.rLTXpQcU4iZjpeNw8DblUQ"
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            <NavigationControl style={navControlStyle} />
            {markerLocation.map((location, index) => (
                <div key={location._id}>
                    <Pin location={location} handleChangePage={handleChangePage} />
                </div>
            ))}

        </ReactMapGL>

    );
};

export default Mapbox;