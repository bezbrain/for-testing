import React from "react";
import styled from "styled-components";

const Loader = ({ loaderCss }) => {
  return <LoaderWrapper className={loaderCss}></LoaderWrapper>;
};

export default Loader;

const LoaderWrapper = styled.div`
  border: 4px solid #9b9898;
  border-top: 4px solid #2785c4;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: loader 1s linear infinite;
  margin: 0 auto;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(300deg);
    }
  }
`;
