import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import heroImg from "../assets/12.jpg";
import Destination from "../components/Destination/Destination";
import Trip from "../components/Trip/Trip";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName={"hero"}
        heroImg={heroImg}
        title={"Your Journey Your Story"}
        text={"Choose Your Favourite Destination."}
      url={"/"}
      btnClass={"show"}
      buttonText={"Travel Plan"}
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
