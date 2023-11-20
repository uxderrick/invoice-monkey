import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme
      accentColor="green"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance="dark"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
