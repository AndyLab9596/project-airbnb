import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailRoomAction } from "../../store/action/ListRoomAction";
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
  const fakeRoom = "616cd2c8efe193001c0a6217";
  const dispatch = useDispatch();
  const { detailRoom } = useSelector((state) => state.ListRoomReducer);
  useEffect(() => {
    dispatch(DetailRoomAction(fakeRoom));
  }, [dispatch]);
  return (
    <div className={classes.content}>
      <RoomImage detailRoom={detailRoom} />
      <ContentRoom />
      <DetailRoomMap />
      <DetailRating />
      <InfoHost />
      <DetailRules />
    </div>
  );
};

export default Detail;
