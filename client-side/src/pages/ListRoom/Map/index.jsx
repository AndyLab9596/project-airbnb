import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import GoogleMapReact from "google-map-react";
import useStyles from "./style";
const Map = () => {
  const classes = useStyles();
  const [coords, setCoords] = useState({ lat: 12.270371, lng: 109.204196 });

  return (
    <div style={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCg9PkLEPcSDdeySq6iHC_YC4m-67XP_Rk",
        }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          // styles: mapStyles,
        }}
        // onChange={(e) => {
        //   setCoords({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        // onChildClick={(child) => setChildClicked(child)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
