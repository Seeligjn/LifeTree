import React from "react";

export default function EmailSignUp() {
  return (
    <div className="flex  bg-gray-300 bg-opacity-75">
      <div className="w-full flex items-center h-[400px] max-w-md p-4 rounded-lg sm:p-6 md:p-8 mb-52 justify-center md:justify-start">
        <form className="space-y-6" action="#">
          <h5 className="text-5xl font-extrabold text-gray-800">
            Stay In Touch
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-semibold text-gray-900 text-opacity-75"
            >
              Sign Up With Email For Exclusive Updates
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-600 text-gray-300 text-sm rounded-lg w-full p-2.5 dark:placeholder-gray-30"
              placeholder="Your Email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-gray-800 font-medium text-lg  text-center transition duration-300 hover:text-gray-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
