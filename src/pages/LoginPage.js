import React from "react";
import LoginForm from "../components/LoginForm";
import LoginNavigation from "../components/LoginNavigation";
import NeedAccount from "../components/NeedAccount";

function LoginPage() {
  return (
    <>
      <LoginNavigation />
      <main>
        <LoginForm />
        <NeedAccount />
      </main>
    </>
  );
}

export default LoginPage;
