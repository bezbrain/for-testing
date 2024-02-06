import React from "react";

const Notification = ({ colorController, message }) => {
  return (
    <p
      className={`text-[#fff] text-center font-semibold mt-2 ${
        colorController ? "bg-green-700" : "bg-red-700"
      }`}
    >
      {message}
    </p>
  );
};

export default Notification;
