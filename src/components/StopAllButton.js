import React from "react";
import stop_all from "../assets/stop_all.svg";

export default function StopAllButton(props) {
  return (
    <button className="stop_all">
      <img src={stop_all} alt="Stop Icon" onClick={props.onClick} />
      <p>Stop all</p>
    </button>
  );
}
