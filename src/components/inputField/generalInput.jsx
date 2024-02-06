import React from "react";
import styled from "styled-components";

const GeneralInput = ({
  inputStyle,
  inputValue,
  inputName,
  placeholder,
  handleChange,
  inputCss,
  inputType,
}) => {
  return (
    <GeneralInputWrapper className={`${inputStyle}`}>
      <input
        type={inputType}
        value={inputValue}
        name={inputName}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputCss}
      />
    </GeneralInputWrapper>
  );
};

export default GeneralInput;

const GeneralInputWrapper = styled.div`
  > input {
    width: 100%;
    border: 1px solid #475467;
    border-radius: 6px;
    height: 40px;
    padding-inline: 10px;
  }
`;
