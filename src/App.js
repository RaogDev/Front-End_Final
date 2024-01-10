import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Reservation from "./components/BookingPage";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
