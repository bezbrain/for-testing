import React, { useEffect } from "react";
import { AuthInputWrap } from "../authWrapper";
import { MdOutlineMailOutline } from "react-icons/md";
import { Button } from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  colorControl,
  otpInput,
  trackShowResend,
  updateMessage,
} from "../../management/features/otp/otpSlice";
import { MuiOtpInput } from "mui-one-time-password-input";
import {
  otpResendCall,
  otpVerifyCall,
} from "../../management/action/superAdmin.action";
import { Notification } from "../helper";
import { useNavigate } from "react-router-dom";
import { getNumber } from "../../utils/savePhoneNumber";

const OtpVerifyComp = () => {
  const {
    number: { otp },
    isColorController,
    message,
    isLoading,
    isShowResend,
  } = useSelector((store) => store.otpStore);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (newValue) => {
    dispatch(otpInput(newValue));
    // console.log(newValue);
  };

  // FUNCTION TO HANDLE VERIFY OF OTP
  const handleVerifyCodeClick = (e) => {
    e.preventDefault();
    if (!otp) {
      dispatch(colorControl(false));
      dispatch(updateMessage("Please, input code"));
    } else if (otp.length !== 6) {
      dispatch(colorControl(false));
      dispatch(updateMessage("Code is incorrect"));
    } else {
      dispatch(colorControl(true));
      dispatch(otpVerifyCall({ navigate, otp }));
    }
  };

  // MAKE USER WAIT 10S BEFORE ALLOWED TO REQUEST FOR NEW OTP
  useEffect(() => {
    setTimeout(() => {
      dispatch(trackShowResend());
    }, 10000);
  }, []);

  // RESEND OTP FUNCTION
  const handleResendOtpClick = (e) => {
    e.preventDefault();
    // console.log("Resend");
    dispatch(otpResendCall());
  };

  return (
    <AuthInputWrap
      mainHeading="2 Factor authentication"
      intro={`Enter the authentication code we sent to ${
        getNumber() || ""
      } below`}
      icon={
        <MdOutlineMailOutline className="bg-[#F4EBFF] text-[#9F2936] text-6xl p-4 rounded-full mx-auto" />
      }
    >
      <form className="text-[#475467] text-lg space-y-4">
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={6}
          gap={1}
          className="custom__style"
        />
        <Notification colorController={isColorController} message={message} />
        <Button
          btnContent={isLoading ? "Verifying..." : "Verify code"}
          handleClick={handleVerifyCodeClick}
          btnStyle={`font-semibold`}
          btn={`${isLoading ? "cursor-not-allowed" : ""}`}
        />

        <footer className="text-[15px] items-center text-center surfaceDuo:flex surfaceDuo:space-x-2">
          <p>Didn’t receive the message?</p>
          <Button
            btnContent={
              isShowResend ? "Click to resend code" : "Please wait..."
            }
            btn={`w-fit ${!isShowResend ? "cursor-not-allowed" : ""}`}
            btnStyle={`bg-white text-[#9F2936] font-semibold ${
              isShowResend ? "" : "opacity-50"
            }`}
            handleClick={handleResendOtpClick}
            disable={!isShowResend}
          />
        </footer>
      </form>
    </AuthInputWrap>
  );
};

export default OtpVerifyComp;
