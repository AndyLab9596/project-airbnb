import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { theme } from "./constants/config";
// Layout
import MainLayout from "./layouts/MainLayout";
import Testing from "./pages/Testing";
// Pages
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <MainLayout path="/" exact Component={Home} />
          <Route path="/locationListPage/:locationId" exact component={Testing} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
