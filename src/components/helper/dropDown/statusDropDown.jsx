import React from "react";
import { useSelector } from "react-redux";

const StatusDropDown = ({
  resend,
  remove,
  enable,
  viewProfile,
  resetPassword,
  disableUser,
}) => {
  const { isPending, isActive, isDisable } = useSelector(
    (store) => store.userMgtStore
  );

  return (
    <div className="absolute right-0 top-[50px] w-[250px] shadow-xl p-4 z-20 rounded-lg bg-white border-t-2">
      <ul className="space-y-2">
        {isPending && (
          <li className="cursor-pointer hover:bg-slate-100 p-2">{resend}</li>
        )}
        {isDisable && (
          <li className="cursor-pointer hover:bg-slate-100 p-2">{enable}</li>
        )}
        {(isPending || isDisable) && (
          <li className="cursor-pointer hover:bg-slate-100 p-2">{remove}</li>
        )}
        {isActive && (
          <li className="cursor-pointer hover:bg-slate-100 p-2">
            {viewProfile}
          </li>
        )}
        {isActive && (
          <li className="cursor-pointer hover:bg-slate-100 p-2">
            {resetPassword}
          </li>
        )}
        {isActive && (
          <li className="cursor-pointer hover:bg-slate-100 p-2">
            {disableUser}
          </li>
        )}
      </ul>
    </div>
  );
};

export default StatusDropDown;
