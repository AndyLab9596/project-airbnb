import { IconButton, Tooltip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import useStyles from "./style";

const DetailRoomMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 12.232980590878872,
    longitude: 109.19706875210589,
    zoom: 15,
  });
  const [settings, setsettings] = useState({
    scrollZoom: false,
    touchZoom: false,
    touchRotate: false,
  });

  const classes = useStyles();
  return (
    <div id="map" className={classes.map__container}>
      <Typography variant="h5">Nơi bạn sẽ đến</Typography>
      <ReactMapGL
        {...viewport}
        {...settings}
        mapStyle="mapbox://styles/thienvy95/ckuvywfwtntgx17pr1vnuxbj8"
        mapboxApiAccessToken="pk.eyJ1IjoidGhpZW52eTk1IiwiYSI6ImNrdXFkcTlycjByem8yeHBnbXVmNmwwMzQifQ.rLTXpQcU4iZjpeNw8DblUQ"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <NavigationControl
          className={classes.navigateControl}
          showCompass={false}
        />
        <Marker latitude={12.233112845703642} longitude={109.19472307380674}>
          <div className={classes.map__location}>
            <div>
              <Tooltip
                title="Địa điểm chính xác khi bạn đặt phòng"
                placement="top"
              >
                <IconButton>
                  <AiFillHome />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default DetailRoomMap;
