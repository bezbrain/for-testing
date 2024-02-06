import React from "react";

const AuthWrap = ({ children, mainWrapStyle }) => {
  return (
    <main
      className={`max-w-[1440px] mx-auto min-h-[90vh] px-4 flex justify-between ${mainWrapStyle}`}
    >
      {children}
    </main>
  );
};

export default AuthWrap;
