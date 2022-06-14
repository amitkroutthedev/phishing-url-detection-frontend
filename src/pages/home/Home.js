import React from "react";
import { Routes, Route } from "react-router-dom";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Head from "../../components/head/Head";
import Navbar from "../../components/navbar/Navbar";
import CheckUrl from "../checkurl/CheckUrl";
function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="checkurl" element={<CheckUrl />} />
      </Routes>
      <Feature />
      <Footer />
    </div>
  );
}

export default Home;
