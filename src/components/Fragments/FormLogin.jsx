import InputForm from "../Elements/Input";
import Button from "../Elements/Buttton/Button";
import Checkbox from "../Elements/Input/checkbox";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const HandleLogin = (e) => {
    e.preventDefault();
    // memasukan ke local storage
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";

    // cara mengambil value dari form
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
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
