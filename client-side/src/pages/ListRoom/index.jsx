import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import { useLocation } from "react-router";
import FilterRoom from "./FilterRoom";
import ListRoomItem from "./ListIRoomItem";
import Map from "./Map";
import useStyles from "./style";

const ListRoom = () => {
  const classes = useStyles();
  const location = useLocation();
  console.log(location);
  return (
    <div style={{ marginTop: 100 }}>
      <Grid container>
        <Grid item xl={7} lg={12} md={12} sm={12} style={{ padding: "0 25px" }}>
          <FilterRoom />
          <ListRoomItem />
        </Grid>
        <Grid item xl={5} lg={12} sm={12}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListRoom;
