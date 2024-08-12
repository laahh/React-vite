import Checkbox from "../Elements/Input/checkbox";
import Label from "../Elements/Input/Label";
import InputForm from "../Elements/Input";
import Button from "../Elements/Buttton/Button";
import { Link } from "react-router-dom";

const FormRegist = () => {
  return (
    <>
      <form className="max-w-sm mx-auto mt-10 ">
        <InputForm label="Email" name="email" placeholder="email@gmail.com" type="email"></InputForm>
        <InputForm label="Password" name="Password" placeholder="****" type="password"></InputForm>
        <InputForm label="Confirm Password" name="Password" placeholder="****" type="password"></InputForm>
        <Checkbox>Remember</Checkbox>
        <Button props="Submit"></Button>
      </form>
    </>
  );
};

export default FormRegist;
