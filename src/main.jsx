import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */},
  </AuthProvider>
);
