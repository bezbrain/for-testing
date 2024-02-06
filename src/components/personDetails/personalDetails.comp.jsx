import React from "react";
import { AuthInputWrap } from "../authWrapper";
import { FaRegUserCircle } from "react-icons/fa";

const PersonalDetailsComp = () => {
  return (
    <AuthInputWrap
      mainHeading="Your personal details"
      intro="Enter your personal details to complete your registration"
      icon={
        <FaRegUserCircle className="bg-[#F4EBFF] text-[#9F2936] text-6xl p-4 rounded-full mx-auto" />
      }
      wrapperStyle="hidden mediumpc:flex bg-[#f7f2f2]"
    ></AuthInputWrap>
  );
};

export default PersonalDetailsComp;
