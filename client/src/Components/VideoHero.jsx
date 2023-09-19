import React from "react";
import ReactPlayer from "react-player";

export default function VideoHero() {
  return (
    <div className="flex w-full h-[800px] justify-center">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=ib1OzxceqeU`}
        width="75%"
        height="75%"
        controls={true}
        style={{
          objectFit: "cover",
          left: 0,
          top: 0,
          right: 0,
          marginTop: "80px",
        }}
      />
    </div>
  );
}
