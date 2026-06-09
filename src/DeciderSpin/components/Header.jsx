import React from "react";

export default function Header() {
  return (
    <div className="w-screen px-8 py-4  flex justify-between">
      <div className="left-side-heading">
        <h1
          className="tracking-wider text-white text-4xl"
        >
          The Decider
        </h1>
      </div>
      <div className=" flex gap-8 mt-2 text-black right-side-stuff">
        <h1>spinner colours</h1>
        <h1>About us</h1>
        <h1>Other Projects</h1>
      </div>
    </div>
  );
}
