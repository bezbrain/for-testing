import styled from "styled-components";

const Input = ({
  inputStyle,
  labelContent,
  inputType,
  inputValue,
  inputName,
  labelStyle,
  placeholder,
  handleChange,
  readInput,
  inputCss,
}) => {
  return (
    <InputWrapper className={`${inputStyle}`}>
      <label className={`${labelStyle}`}>{labelContent}</label>
      <br />
      <input
        type={inputType}
        value={inputValue}
        name={inputName}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readInput}
        className={inputCss}
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  > input {
    width: 100%;
    border: 1px solid #475467;
    border-radius: 6px;
    height: 40px;
    padding-inline: 10px;
  }
`;
