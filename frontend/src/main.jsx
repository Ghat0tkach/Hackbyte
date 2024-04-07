import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Dashboard, Invoices, Contacts, Form, FAQ, Calendar } from "./scenes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/community_wall" element={<Contacts />} />
      <Route path="/idea_lab" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQ />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
