import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegist from "../components/Fragments/FormRegist";

const RegistForm = () => {
  return (
    <AuthLayout text="Registrasi Bang" type="resgistrasi">
      <FormRegist></FormRegist>
    </AuthLayout>
  );
};

export default RegistForm;
