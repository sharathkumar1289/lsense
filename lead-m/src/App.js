import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeadList from "./pages/LeadList";
import LeadDetails from "./pages/LeadDetails";
import Dashboard from "./pages/Dashboard";
import LeadManagement from "./pages/LeadManagement";

import './input.css';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LeadList />} />
      <Route path="/details/:id" element={<LeadDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/management" element={<LeadManagement />} />
    </Routes>
  </Router>
);

export default App;
