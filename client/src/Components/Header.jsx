import React, { useState, useEffect } from "react";
import lifetree from "../../../assets/lifetree.PNG";
import DropDown from "./DropDown.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Event listener to update the state based on screen width
    const handleResize = () => {
      setShowDropdown(window.innerWidth <= 768); // Change 768 to your desired breakpoint
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex max-w-full bg-[#141414] items-center justify-center p-0">
      <div className="max-w-screen-xl max-h-20 flex flex-wrap items-center justify-between p-4">
        <img
          className="max-w-full max-h-10  flex-2"
          src={lifetree}
          alt="life tree"
        />
      </div>
      {showDropdown ? (
        // Render the dropdown when screen width is less than or equal to the breakpoint
        <div className="ml-auto mr-6">
          <DropDown />
        </div>
      ) : (
        // Render individual items when screen width is greater than the breakpoint
        <div className="flex flex-grow md:w-auto items-center">
          <ul className="flex font-medium items-center ml-auto mr-4">
            <li className="flex">
              <a className="block py-2 pl-3 pr-4 text-gray-500 transition duration-300 hover:text-yellow-500  hover:border-gray-400">
                About
              </a>
              <Link to="/musicpage">
                <a className="block py-2 pl-3 pr-4 text-gray-500 transition duration-300 hover:text-yellow-500  hover:border-gray-400">
                  Music
                </a>
              </Link>
              <a className="block py-2 pl-3 pr-4 text-gray-500 transition duration-300 hover:text-yellow-500  hover:border-gray-400">
                Videos
              </a>
              <a className="block py-2 pl-3 pr-4 text-gray-500 transition duration-300 hover:text-yellow-500  hover:border-gray-400">
                Merch
              </a>
              <a className="block py-2 pl-3 pr-4 text-gray-500 transition duration-300 hover:text-yellow-500  hover:border-gray-400">
                Socials
              </a>
              <a className="block py-2 pl-3 pr-4 text-gray-500 transition duration-300 hover:text-yellow-500  hover:border-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
