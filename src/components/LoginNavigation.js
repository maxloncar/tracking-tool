import React from "react";
import logo from "../assets/logo.svg";

export default function LoginNavigation() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Tracking tool</h1>
      </div>
    </header>
  );
}
