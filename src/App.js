
import './App.css';
import Home from "./pages/Home"
import React from "react";
import Blog from "./pages/Blog";
import WorksBig from "./pages/WorksBig/WorksBig";

import { Routes, Route, Link } from "react-router-dom";
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<WorksBig />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;


