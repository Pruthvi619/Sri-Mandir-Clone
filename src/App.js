import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PujaBookings from "./components/PujaBookings";
import Puja from "./components/Puja";
import Home from "./components/Home";
import PujaPackage from "./components/PujaPackage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pujabookings" element={<PujaBookings />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/PujaPackage" element={<PujaPackage />} />
      </Routes>
    </Router>
  );
}

export default App;
