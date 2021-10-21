import React, { useState, useEffect } from 'react';
import axios from "axios";
import useStyles from "./style";
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../../../constants/config';
import Pin from '../Pin';
import manageMapboxApi from '../../../api/manageMapboxApi';


const Mapbox = (props) => {
    const { rentRooms } = props;

    const classes = useStyles();
    const [markerLocation, setMarkerLocation] = useState([]);
    const [viewport, setViewport] = useState({
        longitude: 109.19430380942897,
        latitude: 12.248698629274518,
        zoom: 12.5,
    });

    const searchTerm = rentRooms[0]?.locationId.province;

    const getLocationParams = {
        access_token: MAPBOX_TOKEN,
        country: 'vn',
    };

    const getMarkerParams = {
        access_token: MAPBOX_TOKEN,
        country: 'vn',

        proximity: `${viewport.longitude},${viewport.latitude}`,
        limit: rentRooms.length
    }


    useEffect(() => {
        (async () => {
            try {
                const res = await manageMapboxApi.getLocation(searchTerm, getLocationParams)
                // console.log('res', res)
                if (res.status === 200) {
                    await setViewport({ ...viewport, longitude: res.data.features?.[0]?.center?.[0], latitude: res.data.features?.[0]?.center?.[1] })
                }

            } catch (error) {
                console.log(error)
            }
        })()
    }, [searchTerm])

    useEffect(() => {
        let newMarkerLocation = [];
        (async () => {
            try {
                for (let i = 0; i < rentRooms.length; i++) {
                    const res = await manageMapboxApi.getMarker(rentRooms[i].name, getMarkerParams)
                    console.log(res)

                    newMarkerLocation[i] = { ...rentRooms[i], longitude: res.data.features?.[0].center?.[0], latitude: res.data.features?.[0].center?.[1] }

                }
                setMarkerLocation(newMarkerLocation)
            } catch (error) {
                console.log(error.response)
            }

        })()

        console.log(newMarkerLocation)
    }, [rentRooms])
    // console.log(viewport)
    // useEffect(() => {
    //     let newMarkerLocation = [];

    //     rentRooms.map(room => {
    //         manageMapboxApi.getMarker(room.name, getMarkerParams)
    //             .then(function (response) {
    //                 // handle success
    //                 console.log('rent room', response);
    //                 newMarkerLocation.push({
    //                     ...room,
    //                     longitude: response.data.features?.[0].center?.[0],
    //                     latitude: response.data.features?.[0].center?.[1]
    //                 })
    //                 setMarkerLocation(newMarkerLocation)

    //             })
    //             .catch(function (error) {
    //                 // handle error
    //                 console.log(error.response);
    //             })
    //             .then(function () {
    //                 // always executed
    //             });
    //     })
    // }, [rentRooms])

    // useEffect(() => {
    //     const result = rentRooms.map( async (room) => {
    //         const response = await manageMapboxApi.getMarker(room.name, getMarkerParams)
    //         return response
    //     })


    // }, [rentRooms])


    const navControlStyle = {
        right: 10,
        top: 100
    };


    console.log('markerLocation', markerLocation)

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
                    <Pin location={location} />
                </div>
            ))}

        </ReactMapGL>

    );
};

export default Mapbox;