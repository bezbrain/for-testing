import React from "react";
import NumberComp from "../components/phoneNumber/number.comp";
import AuthImage from "../components/authImage/authImage";
import { AuthWrap } from "../components/authWrapper";

const PhoneNumber = () => {
  return (
    <AuthWrap>
      <NumberComp />
      <AuthImage />
    </AuthWrap>
  );
};

export default PhoneNumber;
