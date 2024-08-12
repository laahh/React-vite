import InputForm from "../Elements/Input";
import Button from "../Elements/Buttton/Button";
import Checkbox from "../Elements/Input/checkbox";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const HandleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log("login");
  };
  return (
    <form onSubmit={HandleLogin} className="max-w-sm mx-auto mt-10 ">
      <InputForm label="Email" name="email" placeholder="email@gmail.com" type="email"></InputForm>
      <InputForm label="Password" name="Password" placeholder="****" type="password"></InputForm>
      <Checkbox>Remember</Checkbox>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
