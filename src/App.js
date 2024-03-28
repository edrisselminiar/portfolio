import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import React, { useRef } from 'react';
import './app.css';



import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Footer />
  </>
  );
}

export default App;
