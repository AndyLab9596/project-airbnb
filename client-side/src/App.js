import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { theme } from "./constants/config";
// Layout
import MainLayout from "./layouts/MainLayout";
// Pages
import Home from "./pages/Home";

//Components
import ModalSignUp from "./components/ModalSignUp";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ModalSignUp />
        {/* <Switch>
          <MainLayout path="/" exact Component={Home} />
        </Switch> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
