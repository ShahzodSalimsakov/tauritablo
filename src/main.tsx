import React from "react";
import ReactDOM from "react-dom/client";
import { initSetting } from "./helpers/settings";
import App from "./App";
import "./style.css";

initSetting();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
