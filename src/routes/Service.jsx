import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ServiceImg from "../assets/10.jpg";
import Footer from '../components/Footer/Footer'
import Trip from "../components/Trip/Trip";

function Service() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero
        cName={"hero-mide"}
        heroImg={ServiceImg}
        title={"Service"}
       
        btnClass={"hide"}
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
