import React, { Fragment } from "react";
import { Route } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import HeaderMobileHuy from "./HeaderMobile/HeaderMobile/HeaderMobile";

const MainLayout = (props) => {
  const { Component, redirectPath, ...restProps } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            {isDesktop ? (
              <Header {...propsRoute} />
            ) : (
              <HeaderMobileHuy {...propsRoute} />
            )}

            <Component {...propsRoute} />
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    ></Route>
  );
};

export default MainLayout;
