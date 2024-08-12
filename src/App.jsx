import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputForm from "./components/Elements/Input";
import Button from "./components/Elements/Buttton/Button";
import FormLogin from "./components/Fragments/FormLogin";
import AuthLayout from "./components/Layouts/AuthLayout";
import LoginForm from "./pages/Login";
import RegistForm from "./pages/Registrasi";

// Componen dan props
// jadi di react itu bisa menggunakan props yang artinya properti
// props bisa digunakan untuk classs seperti css atau text
// untuk penggunaan text bisa menggunakan childer
// jadi ketika memanggil button tidak usah mendeklasikan props, langsung saja di button nya text apa
// const Tombol = (props) => {
//   const { children, varian = "bg-gray-800" } = props;
// const di atas adalah deskontruksi atau memecah
//   return (
//     <button
//       type="button"
//       className={`text-white ${varian} hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
//     >
//       {props.children}
//     </button>
//   );
// };

// const Submit = (props) => {
//   const { children, varian = "bg-blue-700" } = props;
//   return (
//     <button
//       type="button"
//       className={`text-white ${varian} hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
//     >
//       {children}
//     </button>
//   );
// };

function App() {
  return (
    <div>
      <RegistForm></RegistForm>
    </div>
  );
}

export default App;
