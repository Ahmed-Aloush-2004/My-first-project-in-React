import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutImg from "../assets/night.jpg";
import Hero from "../components/Hero/Hero";
import Footer from '../components/Footer/Footer'
import AboutUs from "./AboutUs/AboutUs";


function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName={"hero-mid"}
        heroImg={AboutImg}
        title={"About"}
        btnClass={"hide"}
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
