import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ContentRoom from "../../components/Detail/Content";
import DetailRoomMap from "../../components/Detail/Map";
import DetailRating from "../../components/Detail/Rating";
import RoomImage from "../../components/Detail/RoomImage";

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
  return (
    <div className={classes.content}>
      <RoomImage />
      <ContentRoom />
      <DetailRoomMap />
      <DetailRating />
    </div>
  );
};

export default Detail;
