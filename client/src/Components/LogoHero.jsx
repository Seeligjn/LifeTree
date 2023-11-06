import React, { useState } from "react";
import logo from "../../../assets/logo.PNG";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { RiTwitterXLine, RiFacebookBoxLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import TypeWriter from "./TypeWriter";

export default function LogoHero() {
  // Define the URLs for each social media platform
  const instagramURL = "https://www.instagram.com/your-instagram-profile";
  const facebookURL = "https://www.facebook.com/LifeTreeBand";
  const twitterURL = "https://twitter.com/your-twitter-profile";
  const youtubeURL = "https://www.youtube.com/channel/UCJf_UQSeQ470ugV4GiFo3eA";

  return (
    <div className="flex  w-full h-screen items-center bg-gradient-to-b from-gray-700 to-[#222222] justify-center p-0 ">
      <div className="max-w-full text-center items-center ">
        <img className="w-auto max-h-96 mx-auto" src={logo} alt="logo" />
        <div className="p-2">
          <TypeWriter />
        </div>
        <div className="flex mt-20 items-center space-x-2 justify-center">
          <a
            href={instagramURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl cursor-pointer transition-colors hover:text-blue-500"
          >
            <BsInstagram />
          </a>
          <a
            href={facebookURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-3xl cursor-pointer transition-colors hover:text-blue-500"
          >
            <RiFacebookBoxLine />
          </a>
          <a
            href={twitterURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl cursor-pointer transition-colors hover:text-blue-500"
          >
            <RiTwitterXLine />
          </a>
          <a
            href={youtubeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-4xl cursor-pointer transition-colors hover:text-blue-500"
          >
            <AiOutlineYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
