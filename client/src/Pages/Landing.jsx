import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import LogoHero from "../Components/LogoHero";
import VideoHero from "../Components/VideoHero";
import Footer from "../Components/Footer";
import EmailSignUp from "../Components/EmailSignUp";

export default function Landing({ data }) {
  return (
    <div className="flex-col bg-[#222222]">
      <Header />
      <LogoHero data={data} />
      <VideoHero />
      <EmailSignUp />
      <Footer />
    </div>
  );
}
