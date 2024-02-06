import React, { useEffect, useState } from "react";
import Input from "../inputField/input";
import { Button } from "../buttons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  colorControl,
  setConfirmPasswordInputs,
  setPasswordInputs,
  updateMessage,
} from "../../management/features/setPassword/setPasswordSlice";
import { AuthInputWrap } from "../authWrapper";
import { IoKeyOutline } from "react-icons/io5";
import { Notification, PasswordChecks } from "../helper";
import { passwordChecksArr } from "../../data/generalArray";
import { isCheck, isPasswordsCheck } from "../../utils/passwordCheckFunct";
import { createPassword } from "../../management/action/superAdmin.action";

const SetPasswordComp = () => {
  const { user, isLoading, message, isColorController } = useSelector(
    (store) => store.setPasswordStore
  );

  const [isShowChecks, setIsShowChecks] = useState(false);
  const [characters, setCharacters] = useState(null);
  const [isMatch, setIsMatch] = useState(true);

  const { password, confirmPassword } = user;

  const [encryptedEmail, setEncryptedEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    /*===============================*/
    // FOR TESTING PURPOSE

    // For Admin
    // const encryptedEmail = "/4AVzP3lWRKhs81t4K/ojbkcye2sTadbpB/GdEDjABA=";
    // For User
    // const encryptedEmail = "5a8e8mIQ/qyyl0ep0TwUarkcye2sTadbpB/GdEDjABA=";

    // queryParams.set("email", encryptedEmail);

    // const updateUrl = `${location.pathname}?${queryParams.toString()}`;
    // window.history.replaceState({}, "", updateUrl);
    /*===============================*/

    const ecryptEmail = queryParams.get("email");
    // console.log(ecryptEmail);
    setEncryptedEmail(ecryptEmail);
  }, [location.search]);

  let newCharacters = [];
  // HANDLE password CHANGE
  const handlePasswordChange = (e) => {
    setIsShowChecks(true); // Show password security check
    const { name, value } = e.target;
    dispatch(setPasswordInputs({ name, value }));

    // Function that handles password security checks
    isCheck(value, newCharacters);

    setCharacters(newCharacters);

    // Check if there is value in confirmPassword input
    if (confirmPassword) {
      isPasswordsCheck(password, value, setIsMatch);
    } else {
      setIsMatch(true);
    }
  };

  // TRACK password AND confirmPassword TO MAKE SURE THE MATCH ERROR TRIGGERS WHEN EITHER INPUT FIELD CHANGES
  useEffect(() => {
    if (password == confirmPassword) {
      setIsMatch(true);
    }
    if (!password) {
      setIsShowChecks(false);
    }
  }, [password, confirmPassword]);

  // HANDLE confirmPassword CHANGE
  const handleConfirmPasswordChange = (e) => {
    setIsShowChecks(true); // Don't show password security check
    const { name, value } = e.target;
    dispatch(setConfirmPasswordInputs({ name, value }));

    // Function to check if password is same as confirm password
    isPasswordsCheck(password, value, setIsMatch);

    // Remove "password not match" warning if confirmPassword does not have a value
    if (!value) {
      setIsMatch(true);
    }
  };

  // HANDLE SET PASSWORD CLICK
  const handlePasswordClick = (e) => {
    e.preventDefault();
    // Set an array that has 1-5 for password check
    const checkArr = [];
    passwordChecksArr.forEach((each) => {
      checkArr.push(each.id);
    });
    const allIncluded = checkArr.every((each) => characters?.includes(each));

    if (!password || !confirmPassword) {
      dispatch(updateMessage("Password cannot be empty"));
      dispatch(colorControl(false));
    } else if (!allIncluded) {
      dispatch(updateMessage("Password checks not complete"));
      dispatch(colorControl(false));
    } else if (password !== confirmPassword) {
      dispatch(updateMessage("Passwords are not the same"));
      dispatch(colorControl(false));
    } else {
      // console.log("Passwords match");
      dispatch(createPassword({ password, encryptedEmail, navigate }));
      // dispatch(colorControl(true));
    }
  };

  return (
    <AuthInputWrap
      mainHeading="Welcome to GHGBlaze"
      intro="Set your password to continue"
      icon={
        <IoKeyOutline className="bg-[#F4EBFF] text-[#9F2936] text-6xl p-4 rounded-full mx-auto" />
      }
    >
      <form className="text-[#475467] text-lg ">
        <div>
          <Input
            labelContent="Password"
            inputType="password"
            inputValue={password}
            inputName="password"
            labelStyle="font-semibold"
            handleChange={handlePasswordChange}
          />
          {isShowChecks && (
            <ul>
              <h4 className="font-semibold">Password should be:</h4>
              {passwordChecksArr.map((each, i) => {
                const { id, passwordContent } = each;
                return (
                  <PasswordChecks
                    key={id}
                    passwordContent={passwordContent}
                    index={id}
                    characters={characters}
                  />
                );
              })}
            </ul>
          )}
        </div>
        <div>
          <Input
            labelContent="Confirm Password"
            inputType="password"
            inputValue={confirmPassword}
            inputName="confirmPassword"
            labelStyle="font-semibold"
            inputStyle="mt-2"
            handleChange={handleConfirmPasswordChange}
          />
          {!isMatch && (
            <span className="text-red-700 font-bold text-[15px]">
              Passwords do not match
            </span>
          )}
        </div>
        <Notification colorController={isColorController} message={message} />
        <Button
          btnContent={isLoading ? "Creating..." : "Create Password"}
          btnStyle={`font-semibold mt-4 `}
          btn={`${isLoading ? "cursor-not-allowed" : ""}`}
          handleClick={handlePasswordClick}
          disable={isLoading}
        />
      </form>
    </AuthInputWrap>
  );
};

export default SetPasswordComp;
