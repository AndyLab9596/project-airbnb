import React, { useState } from "react";
import useStyles from "./style";
import GoogleMapReact from "google-map-react";
const Map = () => {
  const classes = useStyles();
  const [coords, setCoords] = useState({
    lng: 109.20427054285005,
    lat: 12.231278296800172,
  });
  return (
    <div
      style={{ height: "88.5vh", width: "100%", position: "sticky", top: 80 }}
    >
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
