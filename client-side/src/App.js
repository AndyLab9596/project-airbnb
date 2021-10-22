import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalSignIn from "./components/Login/ModalSignIn";
//Components
import ModalSignUp from "./components/Login/ModalSignUp";
import { theme, USERID } from "./constants/config";
// Layout
import MainLayout from "./layouts/MainLayout";
import Testing from "./pages/Testing";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import { getInfoUserAction } from "./store/action/Auth";
import Pay from "./pages/Pay";
//Components

import ListRoom from "./pages/ListRoom";

import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/AdminUser";
import AdminLocation from "./pages/AdminLocation";
import AdminRoom from "./pages/AdminRoom";
import AdminTicket from "./pages/AdminTicket";
import AdminRating from "./pages/AdminRating";

import ListRoomVer2 from "./pages/ListRoomVer2";


const App = () => {
  const idUser = localStorage.getItem(USERID);
  const dispatch = useDispatch();
  useEffect(() => {
    if (idUser) {
      dispatch(getInfoUserAction(idUser));
    }
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ModalSignUp />
        <ModalSignIn />
        <Switch>
          <MainLayout path="/" exact Component={Home} />
          <Route
            path="/locationListPage/:locationId"
            exact
            component={Testing}
          />
          <MainLayout path="/profile/:personId" exact Component={Profile} />
          <MainLayout path="/list/:locationId" exact Component={ListRoomVer2} />
          <MainLayout path="/detail/:roomId" exact Component={Detail} />
          <MainLayout path="/pay/:roomId" exact Component={Pay} />

          {/* Admin  */}

          <AdminLayout path="/admin" exact Component={Admin} />
          <AdminLayout
            path="/admin/locations"
            exact
            Component={AdminLocation}
          />
          <AdminLayout path="/admin/rooms" exact Component={AdminRoom} />
          <AdminLayout path="/admin/tickets" exact Component={AdminTicket} />
          <AdminLayout path="/admin/ratings" exact Component={AdminRating} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
