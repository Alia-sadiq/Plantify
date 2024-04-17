import React from "react";
import "./App.css";
import "./index.css";
import Dashboard from "./pages/dashboard";
import inbox from "./pages/inbox";
import create from "./pages/create";
import team from "./pages/team";
import setting from "./pages/setting";
import profile from "./pages/profile";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Sidebar />
  
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/pages/inbox" element={<inbox />} />
        <Route path="/pages/create" element={<create />} />
        <Route path="/pages/team" element={<team />} />
        <Route path="/pages/setting" element={<setting />} />
        <Route path="/pages/profile" element={<profile />} />
      </Routes>
    </Router>
  );
}

export default App;
