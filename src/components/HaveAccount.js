import React from "react";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";

export default function HaveAccount() {
  return (
    <section className="need_account">
      <img src={user} alt="User" />
      <div className="register">
        <h3>Already have an account?</h3>
        <Link to="/login">
          <p>Login here</p>
        </Link>
      </div>
    </section>
  );
}
