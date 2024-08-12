// import Input
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <>
      <div className="mb-5">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputForm;
