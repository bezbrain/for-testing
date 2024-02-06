import React, { useEffect } from "react";
import { AuthInputWrap } from "../authWrapper";
import { Button } from "../buttons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  colorControl,
  numberCode,
  numberInput,
  updateMessage,
} from "../../management/features/phoneNumber/numberSlice";
import { IoKeyOutline } from "react-icons/io5";
import { NumberInput } from "../general";
import {
  phoneCountryCodes,
  phoneNumberCall,
} from "../../management/action/superAdmin.action";
import { Notification } from "../helper";

const NumberComp = () => {
  const {
    number: { phoneNumber },
    isColorController,
    message,
    codes: { phoneCode },
    isLoading,
  } = useSelector((store) => store.numberStore);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // HANDLE PHONE NUMBER CHANGE
  const handleNumberChange = (e) => {
    dispatch(numberInput(e.target.value));
  };

  // HANDLE PHONE CODE CHANGE
  const handleNumberCodeChange = (e) => {
    dispatch(numberCode(e.target.value));
  };

  useEffect(() => {
    dispatch(phoneCountryCodes()); // Call phone code api on page load
  }, []);

  // FUNCTION TO HANDLE PHONE NUMBER BUTTON
  const handlePhoneNumberClick = (e) => {
    e.preventDefault();
    if (!phoneCode) {
      dispatch(colorControl(false));
      dispatch(updateMessage("Please select phone code"));
    } else if (!phoneNumber) {
      dispatch(colorControl(false));
      dispatch(updateMessage("Phone Number cannot be empty"));
    } else {
      dispatch(colorControl(true));
      dispatch(phoneNumberCall({ phoneCode, phoneNumber, navigate }));
    }
  };

  return (
    <AuthInputWrap
      mainHeading="2 Factor authentication"
      intro="We’ll text a verification code to this mobile number whenever you sign in to your account"
      icon={
        <IoKeyOutline className="bg-[#F4EBFF] text-[#9F2936] text-6xl p-4 rounded-full mx-auto" />
      }
    >
      <form className="text-[#475467] text-lg space-y-4">
        <div>
          <NumberInput
            phoneNumber={phoneNumber}
            handleNumberChange={handleNumberChange}
            labelContent="Mobile phone number"
            handleNumberCode={handleNumberCodeChange}
          />
        </div>
        <Notification colorController={isColorController} message={message} />
        <Button
          btnContent={isLoading ? "Verifying..." : "Verify"}
          btn={`${isLoading ? "cursor-not-allowed" : ""}`}
          handleClick={handlePhoneNumberClick}
          disable={isLoading}
        />
      </form>
    </AuthInputWrap>
  );
};

export default NumberComp;
