import { Children } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginForm = () => {
  return (
    <AuthLayout text="Login Bang" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginForm;
