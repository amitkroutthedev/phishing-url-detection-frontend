import React from "react";
import { Routes, Route } from "react-router-dom";
//import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Head from "../../components/head/Head";
import Navbar from "../../components/navbar/Navbar";
import CheckUrl from "../checkurl/CheckUrl";
import Features from "../../components/features/Features";
function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="checkurl" element={<CheckUrl />} />
        <Route path="features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
