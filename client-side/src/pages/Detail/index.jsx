import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import queryString from "query-string";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  DetailRatingAction,
  DetailRoomAction,
} from "../../store/action/RentRoomsAction";
import ContentRoom from "./Content";
import InfoHost from "./InfoHost";
import DetailRoomMap from "./Map";
import DetailRating from "./Rating";
import RoomImage from "./RoomImage";
import DetailRules from "./Rules";

const Detail = () => {
  const useStyle = makeStyles(() => ({
    content: {
      padding: (props) =>
        props.isDeskTop ? "0 80px" : props.isMobile ? " 0 40px" : 0,

      maxWidth: 1120,
      margin: "0 auto",
    },
    wrapper: {
      borderTop: "1px solid rgb(221, 221, 221,1) ",
      padding: "24px",
      [theme.breakpoints.up("md")]: {
        padding: "48px 0",
      },
    },
  }));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyle({ isMobile, isDeskTop });
  const fakeRoomId = "61699651efe193001c0a5bda";
  const dispatch = useDispatch();
  const { detailRoom, detailRating } = useSelector(
    (state) => state.RentRoomReducer
  );
  useEffect(() => {
    dispatch(DetailRoomAction(fakeRoomId));
    dispatch(DetailRatingAction(fakeRoomId));
  }, [dispatch]);

  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
    };
  }, [location.search]);
  return (
    <div className={classes.content}>
      <RoomImage detailRoom={detailRoom} detailRating={detailRating} />

      <ContentRoom
        detailRoom={detailRoom}
        queryParams={queryParams}
        detailRating={detailRating}
      />

      {/* Map */}
      <div className={classes.wrapper}>
        <DetailRoomMap />
      </div>

      {/*  Rating */}
      <div className={classes.wrapper} id="rated">
        <DetailRating detailRating={detailRating} />
      </div>

      {/* Info Host Room */}
      <div className={classes.wrapper}>
        <InfoHost />
      </div>

      {/*  Rules */}
      <div className={classes.wrapper}>
        <DetailRules />
      </div>
    </div>
  );
};

export default Detail;
