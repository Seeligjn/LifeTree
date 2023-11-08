import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div className="max-w-md text-white text-4xl font-semibold">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome...")
            .pauseFor(1000)
            .deleteChars(8)
            .changeDeleteSpeed(1)
            .typeString(" Are LifeTree")
            .start();
        }}
      />
    </div>
  );
}
