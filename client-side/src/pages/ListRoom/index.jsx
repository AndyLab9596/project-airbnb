import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListIcon from "@material-ui/icons/List";
import MapIcon from "@material-ui/icons/Map";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import FilterRoom from "./FilterRoom";
import ListRoomItem from "./ListIRoomItem";
import Map from "./Map";
import useStyles from "./style";
const ListRoom = () => {
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const [display, setDisplay] = useState(false);
  const classes = useStyles({ display, isDesktop });
  const handleOpenDisplay = () => {
    setDisplay(true);
  };
  const handleCloseDisplay = () => {
    setDisplay(false);
  };


  return (
    <div style={{ marginTop: 100 }}>
      <Grid container>
        <div className={classes.button__display}>
          <div className={classes.display}>
            <button onClick={handleOpenDisplay} className={classes.button}>
              <span> Hiện bản đồ</span>
              <MapIcon className={classes.icons} />
            </button>
          </div>
          <div className={classes.display}>
            <button
              onClick={handleCloseDisplay}
              className={classes.button__map}
            >
              <span> Hiện danh sách</span>
              <ListIcon className={classes.icons} />
            </button>
          </div>
        </div>

        <Grid item xl={7} lg={12} md={12} className={classes.grid__list}>
          <FilterRoom />
          <ListRoomItem />
        </Grid>
        <Grid className={classes.grid__map} item xl={5} lg={12} md={12}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListRoom;
