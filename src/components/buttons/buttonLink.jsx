/* eslint-disable react/prop-types */

import styled from "styled-components";

const ButtonLink = ({ linkStyle, url, content }) => {
  return (
    <ButtonLinkWrapper href={url} className={` ${linkStyle}`}>
      {content}
    </ButtonLinkWrapper>
  );
};

export default ButtonLink;

const ButtonLinkWrapper = styled.a`
  color: #fff;
  font-size: 1.5rem;
  border: 2px solid #fff;
  padding: 1px 16px 5px;
  border-radius: 6px;
  display: block;
  width: fit-content;
  @media screen and (min-width: 768px) {
    color: #9f2936;
    font-size: 1rem;
    display: block;
    border: 2px solid #9f2936;
  }
  :hover {
    transform: scale(1.05);
  }
`;
