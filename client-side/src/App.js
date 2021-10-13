import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalSignIn from "./components/Login/ModalSignIn";
//Components
import ModalSignUp from "./components/Login/ModalSignUp";
import { theme } from "./constants/config";
// Layout
import MainLayout from "./layouts/MainLayout";
import Testing from "./pages/Testing";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import { getInfoUserAction } from "./store/action/Auth";
import TestingApi from "./pages/TestingApi";

const App = () => {
  const idUser = localStorage.getItem("idUser");
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
          <Route path="/locationListPage/:locationId" exact component={Testing} />
          <Route path="/testingApi" exact component={TestingApi} />
          <MainLayout path="/profile" exact Component={Profile} />
          <MainLayout path="/detail" exact Component={Detail} />

        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
