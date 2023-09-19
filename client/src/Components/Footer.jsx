import React from "react";
import { BsYoutube } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillFacebook } from "react-icons/ai";

export default function Footer() {
  const instagramURL = "https://www.instagram.com/your-instagram-profile";
  const facebookURL = "https://www.facebook.com/your-facebook-page";
  const twitterURL = "https://twitter.com/your-twitter-profile";
  const youtubeURL = "https://www.youtube.com/your-youtube-channel";

  return (
    <footer className="max-w-full bg-[#141414]">
      <div className="max-w-full text-center">
        <div className="flex items-center space-x-2 justify-center items-center">
          <a
            href={instagramURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-3xl cursor-pointer transition-colors hover:text-blue-500"
          >
            <PiInstagramLogoFill />
          </a>
          <a
            href={facebookURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-3xl cursor-pointer transition-colors hover:text-blue-500"
          >
            <AiFillFacebook />
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
            <BsYoutube />
          </a>
        </div>
        <p className="text-sm text-white">
          ©2023 LifeTree Music. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
