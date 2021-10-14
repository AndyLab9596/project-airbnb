import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import FilterRoom from "./FilterRoom";
import ListRoomItem from "./ListIRoomItem";
import Map from "./Map";
import useStyles from "./style";

const ListRoom = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 100 }}>
      <Grid container>
        <Grid item lg={7} style={{ padding: "0 25px" }}>
          <FilterRoom />
          <ListRoomItem />
        </Grid>
        <Grid item lg={5}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListRoom;
