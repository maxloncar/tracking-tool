import React from "react";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";

export default function NeedAccount() {
  return (
    <section className="need_account">
      <img src={user} alt="User" />
      <div className="register">
        <h3>Need an account?</h3>
        <Link to="/register">
          <p>Register here</p>
        </Link>
      </div>
    </section>
  );
}
