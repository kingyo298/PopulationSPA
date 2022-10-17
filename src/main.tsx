import "./main.css";

import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
axios.defaults.baseURL = "https://opendata.resas-portal.go.jp";

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
