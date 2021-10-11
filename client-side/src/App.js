import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { theme } from "./constants/config";
// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

//Components
import ModalSignUp from "./components/Login/ModalSignUp";
import ModalSignIn from "./components/Login/ModalSignIn";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ModalSignUp />
        <ModalSignIn />
        <Switch>
          <MainLayout path="/" exact Component={Home} />
          <MainLayout path="/profile" exact Component={Profile} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
