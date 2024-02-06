import React from "react";

const InputCheckbox = ({
  preferContact,
  labelContent,
  inputName,
  handleChange,
}) => {
  return (
    <div className="border-2 w-1/2 p-2 rounded-md space-x-1">
      <input
        type="checkbox"
        name={inputName}
        checked={preferContact}
        className="cursor-pointer"
        onChange={handleChange}
      />
      <label htmlFor="" className="cursor-pointer">
        {labelContent}
      </label>
    </div>
  );
};

export default InputCheckbox;
