import React from "react";
import Header from "../Components/Header";
import LogoHero from "../Components/LogoHero";
import VideoHero from "../Components/VideoHero";
import Footer from "../Components/Footer";
import About from "../Components/About";

export default function Landing() {
  return (
    <div className="flex-col bg-[#222222]">
      <Header />
      <LogoHero />
      <VideoHero />
      <About />
      <Footer />
    </div>
  );
}
