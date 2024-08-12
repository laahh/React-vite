import { Children } from "react";
import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, text, type } = props;
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">{text}</h5>
        {children}

        {/* Kondisional render */}
        <p className="text-sm mt-5 ">
          {type === "login" ? "  Don't have an account ?" : "Have an Account ?"}

          {type === "login" && (
            <Link to="/registrasi" className="font-bold text-blue-600">
              Sign Up
            </Link>
          )}
          {type === "resgistrasi" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
