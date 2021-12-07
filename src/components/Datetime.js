import React from "react";
import dateIcon from "../assets/date.svg";

export default function Datetime() {
  const today = new Date();
  const displayDate = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}.`;

  return (
    <div className="date">
      <img src={dateIcon} alt="Date icon" />
      <h2>Today ({displayDate})</h2>
    </div>
  );
}
