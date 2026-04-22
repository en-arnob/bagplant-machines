import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Home from "./routes/home.tsx";
import Login from "./routes/login.tsx";
import Reports from "./routes/reports.tsx";
import Machines from "./routes/machines.tsx";
import Account from "./routes/account.tsx";
import GetReading from "./routes/getreading.tsx";
import AddMachine from "./routes/addmachine.tsx";
import Help from "./routes/help.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />} />
          <Route path="machines" element={<Machines />} />
          <Route path="machines/new" element={<AddMachine />} />
          <Route path="account" element={<Account />} />
          <Route path="help" element={<Help />} />
          <Route path="get-reading" element={<GetReading />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
