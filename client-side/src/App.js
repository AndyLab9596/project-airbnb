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
          <MainLayout path="/list/:locationId" exact Component={ListRoom} />
          <MainLayout path="/detail/:roomId" exact Component={Detail} />
          <MainLayout path="/pay" exact Component={Pay} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
