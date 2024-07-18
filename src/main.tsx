import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: { fontFamily: "Montserrat" },
  palette: {
    primary: {
      main: "#f3f0f5",
    },
    secondary: {
      main: "#10B981",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
