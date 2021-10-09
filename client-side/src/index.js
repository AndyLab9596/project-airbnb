import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
<<<<<<< HEAD
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
import "../src/constants/config.css";

>>>>>>> master
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
