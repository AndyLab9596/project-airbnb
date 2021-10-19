import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DetailRatingAction,
  DetailRoomAction,
} from "../../store/action/ListRoomAction";
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
  }));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyle({ isMobile, isDeskTop });
  const fakeRoomId = "61699651efe193001c0a5bda";
  const dispatch = useDispatch();
  const { detailRoom, detailRating } = useSelector(
    (state) => state.ListRoomReducer
  );
  useEffect(() => {
    dispatch(DetailRoomAction(fakeRoomId));
    dispatch(DetailRatingAction(fakeRoomId));
  }, [dispatch]);
  const userBooking = {
    checkIn: "10-19-2021",
    checkOut: "10-22-2021",
    _adult: 3,
    _baby: 2,
    _toddler: 1,
    price: 500000,
  };
  return (
    <div className={classes.content}>
      <RoomImage detailRoom={detailRoom} detailRating={detailRating} />
      <ContentRoom
        detailRoom={detailRoom}
        userBooking={userBooking}
        detailRating={detailRating}
      />
      <DetailRoomMap />
      <DetailRating detailRating={detailRating} />
      <InfoHost />
      <DetailRules />
    </div>
  );
};

export default Detail;
