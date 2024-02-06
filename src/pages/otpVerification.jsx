import React from "react";
import { OtpVerifyComp } from "../components/otpVerification/";
import { AuthWrap } from "../components/authWrapper";
import AuthImage from "../components/authImage/authImage";

const OtpVerification = () => {
  return (
    <AuthWrap>
      <OtpVerifyComp />
      <AuthImage />
    </AuthWrap>
  );
};

export default OtpVerification;
