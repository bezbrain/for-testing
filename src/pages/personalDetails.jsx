import React from "react";
import { AuthWrap } from "../components/authWrapper";
import {
  PersonalDetailsComp,
  PersonalInputs,
} from "../components/personDetails";

const PersonalDetails = () => {
  return (
    <AuthWrap mainWrapStyle="pb-12">
      <PersonalDetailsComp />

      <PersonalInputs />
    </AuthWrap>
  );
};

export default PersonalDetails;
