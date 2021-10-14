import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import RoomImage from "../../components/Detail/RoomImage";

const Detail = () => {
  const useStyle = makeStyles(() => ({
    content: {
      padding: (props) =>
        props.isDeskTop
          ? "100px 80px 0 80px"
          : props.isMobile
          ? "100px 40px 0 40px"
          : 0,

      maxWidth: (props) => (props.isDeskTop ? 1120 : "100%"),
      margin: "0 auto",
    },
  }));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyle({ isMobile, isDeskTop });
  return (
    <div className={classes.content}>
      <RoomImage />
    </div>
  );
};

export default Detail;
