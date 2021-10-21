import React, { useState, useEffect } from 'react';
import axios from "axios";
import useStyles from "./style";
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { MAPBOX_TOKEN } from '../../../constants/config';
import Pin from '../Pin';


const Mapbox = (props) => {
    const { rentRooms } = props;
    const classes = useStyles();
    const [markerLocation, setMarkerLocation] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 12.233032276052878,
        longitude: 109.19698601839609,
        zoom: 12,
    });

    const searchTerm = rentRooms[0]?.locationId.province;
    console.log(searchTerm)

    // This is used to take the location into Mapbox Url in order to locate the center coordinate of the map
    // &limit=5&proximity=${viewport.longitude}%2C${viewport.latitude}
    useEffect(() => {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?country=vn&access_token=${MAPBOX_TOKEN}`)
            .then(function (response) {
                // handle success
                console.log(response);

                setViewport({ ...viewport, longitude: response.data.features?.[0]?.center?.[0], latitude: response.data.features?.[0]?.center?.[1] })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [searchTerm]);

    //  This is used to take the marker
    useEffect(() => {
        let newMarkerLocation = []
        rentRooms?.map(room => {
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${room.name}.json?country=vn&limit=${rentRooms.length}&proximity=${viewport.longitude}%2C${viewport.latitude}&types=poi&access_token=${MAPBOX_TOKEN}`)
                .then(function (response) {
                    // handle success
                    console.log('rent room', response);
                    newMarkerLocation.push({
                        ...room,
                        longitude: response.data.features?.[0].center?.[0],
                        latitude: response.data.features?.[0].center?.[1]
                    })
                    setMarkerLocation(newMarkerLocation)

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        })

    }, []);

    const navControlStyle = {
        right: 10,
        top: 10
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
                    <Pin location={location} />
                </div>
            ))}

        </ReactMapGL>

    );
};

export default Mapbox;