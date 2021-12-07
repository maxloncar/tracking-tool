import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import eye from "../assets/eye.svg";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setError();
      setLoading();
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to create an account.");
    }
    setLoading(false);
  }

  return (
    <section className="login_form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="username"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          ref={emailRef}
          required
        />
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <span className="eye">
          <img src={eye} alt="Eye" />
        </span>
        {error && <p className="danger">{error}</p>}
        <button disabled={loading} type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
