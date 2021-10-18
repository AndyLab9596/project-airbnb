import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListIcon from "@material-ui/icons/List";
import MapIcon from "@material-ui/icons/Map";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getListRoomAction } from "../../store/action/ListRoomAction";
import FilterRoom from "./FilterRoom";
import ListRoomItem from "./ListIRoomItem";
import Map from "./Map";
import useStyles from "./style";

const ListRoom = () => {
  const dispatch = useDispatch();

  const param = useParams();
  const locationId = param.locationId

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const [display, setDisplay] = useState(false);

  const classes = useStyles({ display, isDesktop });

  const arrListRoom = useSelector((state) => state.ListRoomReducer.arrListRoom);
  const filterPrice = useSelector((state) => state.ListRoomReducer.filterPrice);
  const filterRoom = useSelector((state) => state.ListRoomReducer.filterRoom);
  console.log(arrListRoom);
  console.log(param.locationId);
  useEffect(() => {
    dispatch(getListRoomAction(locationId));

  }, [locationId]);

  const handleOpenDisplay = () => {
    setDisplay(true);
  };
  const handleCloseDisplay = () => {
    setDisplay(false);
  };

  return (
    <div className={classes.root}>
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
          <ListRoomItem arrListRoom={arrListRoom} />
        </Grid>
        <Grid className={classes.grid__map} item xl={5} lg={12} md={12}>
          <Map arrListRoom={arrListRoom} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListRoom;
