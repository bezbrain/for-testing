import React, { useEffect, useState } from "react";
import { Input } from "../inputField";
import { useDispatch, useSelector } from "react-redux";
import { InputCheckbox, LogoUpload, NumberInput } from "../general";
import {
  checkedInput,
  colorControl,
  fileInput,
  personalInputs,
  updateMessage,
} from "../../management/features/personalDetails/personalSlice";
import { Button } from "../buttons";
import { personalDetailsCall } from "../../management/action/superAdmin.action";
import { getNumber } from "../../utils/savePhoneNumber";
import { Notification } from "../helper";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../utils/saveUserRole";

const PersonalInputs = () => {
  const { personal, isLoading, message, isColorController } = useSelector(
    (store) => store.personalDetailsStore
  );

  const {
    number: { phoneNumber },
  } = useSelector((store) => store.numberStore);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    title,
    firstName,
    lastName,
    jobTitle,
    department,
    // phoneNumber,
    address,
    preferEmailContact,
    preferPhoneContact,
    companyLogo,
  } = personal;

  // HANDLE OTHER INPUT FIELDS THAT ARE NOT INPUT CHECKS AND INPUT FILE
  const handlePersonalChange = (e) => {
    const { value, name } = e.target;
    dispatch(personalInputs({ value, name }));
  };

  // HANDLE FILE HANGE
  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    dispatch(fileInput(e.target.files[0].name));
  };

  // HANDLE INPUT CHECK CHANGE
  const handleCheckChange = (e) => {
    console.log(e.target.checked);
    const { checked, name } = e.target;
    dispatch(checkedInput({ checked, name }));
  };

  // HANDLE PERSONAL DETAILS BTN CLICK
  const handleDetailsClick = (e) => {
    e.preventDefault();
    const newPersonalDetails = {
      ...personal,
      phoneNumber: Number(getNumber()),
    };

    if (
      !title ||
      !firstName ||
      !lastName ||
      !jobTitle ||
      !department ||
      !address
      // ||
      // !phoneNumber
    ) {
      dispatch(colorControl(false));
      dispatch(updateMessage("No field should be empty"));
    } else if (!preferEmailContact) {
      dispatch(colorControl(false));
      dispatch(updateMessage("Please check email contact preference"));
    } else {
      // console.log(newPersonalDetails);
      dispatch(colorControl(true));
      dispatch(personalDetailsCall({ newPersonalDetails, navigate }));
    }
  };

  return (
    <form className="w-[400px] text-[#475467] space-y-[12px] mx-auto">
      <Input
        inputStyle=""
        labelContent="Title"
        inputType="text"
        inputValue={title}
        inputName="title"
        labelStyle="font-semibold"
        placeholder="Enter your title"
        handleChange={handlePersonalChange}
      />
      <Input
        inputStyle=""
        labelContent="First Name"
        inputType="text"
        inputValue={firstName}
        inputName="firstName"
        labelStyle="font-semibold"
        placeholder="Enter your first name"
        handleChange={handlePersonalChange}
      />
      <Input
        inputStyle=""
        labelContent="Last Name"
        inputType="text"
        inputValue={lastName}
        inputName="lastName"
        labelStyle="font-semibold"
        placeholder="Enter your last name"
        handleChange={handlePersonalChange}
      />
      <Input
        inputStyle=""
        labelContent="Job Title"
        inputType="text"
        inputValue={jobTitle}
        inputName="jobTitle"
        labelStyle="font-semibold"
        placeholder="Enter job title"
        handleChange={handlePersonalChange}
      />
      <Input
        inputStyle=""
        labelContent="Department"
        inputType="text"
        inputValue={department}
        inputName="department"
        labelStyle="font-semibold"
        placeholder="Enter department"
        handleChange={handlePersonalChange}
      />

      <Input
        inputCss="bg-gray-300 outline-none hover:cursor-not-allowed"
        labelContent="Business phone number"
        inputType="number"
        inputValue={Number(getNumber()) || phoneNumber}
        inputName="phoneNumber"
        labelStyle="font-semibold"
        readInput={true}
      />

      <Input
        inputStyle=""
        labelContent="Address"
        inputType="text"
        inputValue={address}
        inputName="address"
        labelStyle="font-semibold"
        placeholder="Enter business address"
        handleChange={handlePersonalChange}
      />

      {/* Contact Preference */}
      <div>
        <label htmlFor="" className="font-semibold">
          Contact preference
        </label>
        <section className="flex space-x-2">
          <InputCheckbox
            preferContact={preferEmailContact}
            labelContent="Email"
            inputName="preferEmailContact"
            handleChange={handleCheckChange}
          />
          <InputCheckbox
            preferContact={preferPhoneContact}
            labelContent="Phone"
            inputName="preferPhoneContact"
            handleChange={handleCheckChange}
          />
        </section>
      </div>

      {getUserRole() === "ADMIN" && (
        <LogoUpload
          companyLogo={companyLogo}
          handleFileChange={handleFileChange}
        />
      )}

      <Notification colorController={isColorController} message={message} />
      <Button
        btnContent={isLoading ? "Completing..." : "Complete"}
        btn={`font-semibold ${isLoading ? "cursor-not-allowed" : ""}`}
        handleClick={handleDetailsClick}
        disable={isLoading}
      />
    </form>
  );
};

export default PersonalInputs;
