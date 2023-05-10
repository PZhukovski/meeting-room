import Select from "react-select";

const SelectComponent = ({
  value,
  onChange,
  options,
  error,
  refSelect,
  placeholder,
}) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption?.label);
  };

  return (
    <>
      <Select
        placeholder={placeholder}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: error?.message ? "#d70112" : "rgba(0, 0, 0, 0.1)",
            borderWidth: error?.message ? "2px" : "none",
          }),
        }}
        filterOption={false}
        onInputChange={false}
        options={options}
        value={value.value}
        onChange={handleChange}
        ref={refSelect}
      />
      {error && <span className="error">{error.message}</span>}
    </>
  );
};

export default SelectComponent;
