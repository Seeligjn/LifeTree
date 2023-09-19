import React from "react";
import lifetree from "../../../assets/lifetree.png";

export default function Header() {
  return (
    <nav className="flex max-w-full bg-[#141414]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <img
          className="max-w-full max-h-10 ml-6 flex-2"
          src={lifetree}
          alt="life tree"
        />
        <div className="flex flex-grow md:w-auto ml-6 items-center">
          <ul className="flex font-medium items-center">
            <li className="flex">
              <a className="block py-2 pl-3 pr-4 text-gray-500">About</a>
              <a className="block py-2 pl-3 pr-4 text-gray-500">Music</a>
              <a className="block py-2 pl-3 pr-4 text-gray-500">Videos</a>
              <a className="block py-2 pl-3 pr-4 text-gray-500">Merch</a>
              <a className="block py-2 pl-3 pr-4 text-gray-500">Socials</a>
              <a className="block py-2 pl-3 pr-4 text-gray-500">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
