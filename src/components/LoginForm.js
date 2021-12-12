import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import eye from "../assets/eye.svg";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
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
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      let errorCode = err.code.split("auth/")[1];
      setError(errorCode);
    }
    setLoading(false);
  }

  return (
    <section className="login_form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="email"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          autoComplete="on"
          ref={passwordRef}
          required
        />
        <span className="eye">
          <img src={eye} alt="Eye" />
        </span>
        {error && <p className="danger">{error}</p>}
        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
    </section>
  );
}
