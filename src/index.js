import App from "App";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
