import React from "react";
import LoginNavigation from "../components/LoginNavigation";
import HaveAccount from "../components/HaveAccount";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <>
      <LoginNavigation />
      <main>
        <RegisterForm />
        <HaveAccount />
      </main>
    </>
  );
}

export default RegisterPage;
