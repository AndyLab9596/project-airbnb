import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/constants/config.css";
import { ConfirmProvider } from "material-ui-confirm";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfirmProvider>
        <App />
      </ConfirmProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
