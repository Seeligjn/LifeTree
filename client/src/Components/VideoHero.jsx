import React from "react";
import ReactPlayer from "react-player";

export default function VideoHero() {
  return (
    <div className="flex w-full drop-shadow-2xl">
      <div
        className="player-wrapper"
        style={{ width: "100%", paddingTop: "56.25%" }}
      >
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ib1OzxceqeU"
          controls={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      </div>
    </div>
  );
}
