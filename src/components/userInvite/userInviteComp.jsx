import React from "react";
import { Input } from "../inputField";
import { Button } from "../buttons";
import { useSelector, useDispatch } from "react-redux";
import {
  colorControl,
  newUserInputs,
  updateMessage,
} from "../../management/features/userInvite/userInviteSlice";
import Notification from "../helper/notification/notification";
import { userInviteCall } from "../../management/action/superAdmin.action";

const UserInviteComp = () => {
  const { newUser, isDisable, isLoading, message, isColorController } =
    useSelector((store) => store.userInviteStore);

  const { firstName, lastName, email, userType } = newUser;

  const dispatch = useDispatch();

  const handleNewUserChange = (e) => {
    const { value, name } = e.target;
    dispatch(newUserInputs({ value, name }));
  };

  const handleNewUserClick = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !userType) {
      dispatch(updateMessage("Password cannot be empty"));
      dispatch(colorControl(false));
    } else {
      dispatch(userInviteCall(newUser));
    }
  };

  return (
    <form className="w-[300px] mx-auto surfaceDuo:w-[400px]">
      <h1 className="font-bold text-2xl text-center mb-8">Add new user</h1>
      <Input
        inputStyle="mt-4"
        labelContent="User First Name"
        inputType="text"
        inputValue={firstName}
        inputName="firstName"
        labelStyle="font-semibold"
        placeholder="Enter user first name"
        inputCss="mt-[5px]"
        handleChange={handleNewUserChange}
      />
      <Input
        inputStyle="mt-4"
        labelContent="User Last Name"
        inputType="text"
        inputValue={lastName}
        inputName="lastName"
        labelStyle="font-semibold"
        placeholder="Enter user last name"
        inputCss="mt-[5px]"
        handleChange={handleNewUserChange}
      />
      <Input
        inputStyle="mt-4"
        labelContent="Email Address"
        inputType="text"
        inputValue={email}
        inputName="email"
        labelStyle="font-semibold"
        placeholder="Enter user email address"
        inputCss="mt-[5px]"
        handleChange={handleNewUserChange}
      />
      <Input
        inputStyle="mt-4"
        labelContent="User Type"
        inputType="text"
        inputValue={userType}
        inputName="userType"
        labelStyle="font-semibold"
        placeholder="Enter user type"
        inputCss="mt-[5px]"
        handleChange={handleNewUserChange}
      />

      <Notification colorController={isColorController} message={message} />

      <Button
        btnContent={`${isLoading ? "Sending..." : "Send invitaion email"}`}
        btn={`py-2 ${isLoading ? "cursor-not-allowed" : ""}`}
        btnStyle="mt-8 w-2/3 mx-auto"
        handleClick={handleNewUserClick}
        disable={isDisable}
      />
    </form>
  );
};

export default UserInviteComp;
