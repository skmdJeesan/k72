import React, { useRef } from "react";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";

function App() {
  return (
    <div className="App text-white w-full h-screen">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
