import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div className="max-w-md text-white text-4xl font-semibold">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome to the start of something great...")
            .pauseFor(2000)
            .deleteAll()
            .typeString("We Are LifeTree")
            .start();
        }}
      />
    </div>
  );
}
