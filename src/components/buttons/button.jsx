import React from "react";
import styled from "styled-components";

const Button = ({ btnContent, btn, btnStyle, handleClick, disable }) => {
  return (
    <ButtonWrapper className={`${btnStyle}`}>
      <button className={btn} onClick={handleClick} disabled={disable}>
        {btnContent}
      </button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  background-color: #9f2936;
  color: #fff;
  border-radius: 6px;
  :hover {
    transform: scale(1.05);
  }

  > button {
    width: 100%;
    padding-block: 5px;
    cursor: pointer;
  }
`;
