import React from "react";

const AuthInputWrap = ({
  children,
  mainHeading,
  intro,
  icon,
  wrapperStyle,
}) => {
  return (
    <div
      className={`w-[100%] flex flex-col items-center justify-center border-2 md:w-[50%] ${wrapperStyle}`}
    >
      <div className="w-[90%] space-y-4 iPhone:w-[80%] surfaceDuo:w-[360px] md:px-[10px]">
        {icon}

        <h1 className="text-2xl surfaceDuo:text-3xl font-bold text-center">
          {mainHeading}
        </h1>
        <p className="text-xl font-semibold text-[#475467] text-center">
          {intro}
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthInputWrap;
