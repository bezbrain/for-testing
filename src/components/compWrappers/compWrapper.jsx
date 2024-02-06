import React from "react";
import styled from "styled-components";

const CompWrapper = ({ children, containerStyle }) => {
  return (
    <CompWrapperStyles style={containerStyle}>{children}</CompWrapperStyles>
  );
};

export default CompWrapper;

const CompWrapperStyles = styled.main`
  /* border: 2px solid green; */
  max-width: 1440px;
  margin-inline: auto;
  padding: 1rem;
`;
