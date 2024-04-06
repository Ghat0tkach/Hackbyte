import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../src/utils/theme";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
 <Auth0Provider
 domain="dev-i7defub067ccnqlc.us.auth0.com"
  clientId="olStHPXmGUfOHLjyP7wcpPyQValF0piJ"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  

      
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
    </Auth0Provider>
   
 
 
);
