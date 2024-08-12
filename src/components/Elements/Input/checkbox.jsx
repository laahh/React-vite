import Label from "./Label";
const Checkbox = (props) => {
  const { type, name, children } = props;
  return (
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input
          id={name}
          type={type}
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        />
      </div>
      <Label className="mb-5" type={type}>
        {children}
      </Label>
    </div>
  );
};

export default Checkbox;
