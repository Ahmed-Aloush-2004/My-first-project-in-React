import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from '../components/Footer/Footer'
import ContactForm from "./ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName={"hero-mide"}
        heroImg={ContactImg}
        title={"Contact"}
        btnClass={"hide"}
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
