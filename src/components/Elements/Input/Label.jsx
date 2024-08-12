const Label = (props) => {
  const { type, children } = props;
  return (
    <label htmlFor={type} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {children}
    </label>
  );
};

export default Label;
