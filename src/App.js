import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ServiceList from "./pages/ServiceList";
import AddService from "./pages/AddService";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service_list" element={<ServiceList  />} />
        <Route path="/add_new_service" element={<AddService />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
