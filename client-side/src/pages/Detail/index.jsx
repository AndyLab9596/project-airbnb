import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
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
  return (
    <div className={classes.content}>
      <RoomImage />
      <ContentRoom />
      <DetailRoomMap />
      <DetailRating />
      <InfoHost />
      <DetailRules />
    </div>
  );
};

export default Detail;
