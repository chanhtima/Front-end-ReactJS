import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.scss";
import "./assets/index.css";
import "@splidejs/react-splide/css";
import App from "./route/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
