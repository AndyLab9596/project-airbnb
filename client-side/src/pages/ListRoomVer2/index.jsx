import React, { Fragment, useMemo } from "react";
import DesktopListRoom from "./DesktopListRoom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MobileListRoom from "./MobileListRoom";

const ListRoomVer2 = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Fragment>{isDesktop ? <DesktopListRoom /> : <MobileListRoom />}</Fragment>
  );
};

export default ListRoomVer2;
