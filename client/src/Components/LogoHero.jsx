import React from "react";
import logo from "../../../assets/logo.PNG";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { RiTwitterXLine, RiFacebookBoxLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";

export default function LogoHero() {
  // Define the URLs for each social media platform
  const instagramURL = "https://www.instagram.com/your-instagram-profile";
  const facebookURL = "https://www.facebook.com/your-facebook-page";
  const twitterURL = "https://twitter.com/your-twitter-profile";
  const youtubeURL = "https://www.youtube.com/your-youtube-channel";

  return (
    <div className="flex w-full bg-[#222222] items-center justify-center">
      <div className="max-w-full text-center items-center mt-10">
        <img className="w-auto max-h-96 mx-auto mb-2" src={logo} alt="logo" />
        <div className="flex items-center space-x-2 justify-center">
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
