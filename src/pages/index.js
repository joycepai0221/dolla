import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/HeroSection";
import IntroSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <IntroSection {...homeObjOne} />
      <IntroSection {...homeObjTwo} />
      <Services />
      <IntroSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
