import React from "react";
import stop_all from "../assets/stop_all.svg";

export default function StopAllButton() {
  return (
    <button className="stop_all">
      <img src={stop_all} alt="Stop Icon" />
      <p>Stop all</p>
    </button>
  );
}
