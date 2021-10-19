import React, { useState } from 'react';
import useStyles from "./style";
import ReactMapGL from 'react-map-gl';


const Mapbox = () => {
    const classes = useStyles();
    const [viewport, setViewport] = useState({
        latitude: 12.233032276052878,
        longitude: 109.19698601839609,
        zoom: 12,
    });

    return (
        <div className={classes.root}>
            <ReactMapGL
                {...viewport}
                className={classes.ReactMapGL}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/thienvy95/ckuvywfwtntgx17pr1vnuxbj8"
                mapboxApiAccessToken="pk.eyJ1IjoidGhpZW52eTk1IiwiYSI6ImNrdXFkcTlycjByem8yeHBnbXVmNmwwMzQifQ.rLTXpQcU4iZjpeNw8DblUQ"
                onViewportChange={(viewport) => setViewport(viewport)}
            >

            </ReactMapGL>
        </div>
    );
};

export default Mapbox;