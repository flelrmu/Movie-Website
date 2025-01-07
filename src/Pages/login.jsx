import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

function LoginPage() {
  return (
    <AuthLayouts>
      <FormLogin />
    </AuthLayouts>
  );
}

export default LoginPage;
