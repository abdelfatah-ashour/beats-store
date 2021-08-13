import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/main.css";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
