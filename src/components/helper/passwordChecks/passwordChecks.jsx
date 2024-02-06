import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PasswordChecks = ({ passwordContent, characters, index }) => {
  return (
    <li className="flex items-center space-x-1 text-sm">
      {characters.includes(index) ? (
        <FaCheckCircle className="text-green-700" />
      ) : (
        <FaTimesCircle className="text-red-700" />
      )}
      <span>{passwordContent}</span>
    </li>
  );
};

export default PasswordChecks;
