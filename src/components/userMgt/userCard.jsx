import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuPen } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { StatusDropDown } from "../helper";
import { useSelector } from "react-redux";

const UserCard = ({ status, color, lastOnline, handleClick, id }) => {
  const { isPending, isActive, isDisable } = useSelector(
    (store) => store.userMgtStore
  );

  // FUNCTION TO RENDER CORRESPONDING COMPONENT FOR EACH STATUS
  const statusDropDown = (status, id) => {
    if (status === "Pending" && isPending) {
      return (
        isPending === id && (
          <StatusDropDown
            resend="Resend registration email"
            remove="Remove user"
          />
        )
      );
    }
    if (status === "Active" && isActive) {
      return (
        isActive === id && (
          <StatusDropDown
            viewProfile="View Profile"
            resetPassword="Reset password"
            disableUser="Disable user"
          />
        )
      );
    }
    if (status === "Disabled" && isDisable) {
      return (
        isDisable === id && (
          <StatusDropDown enable="Enable user" remove="Remove user" />
        )
      );
    }
  };

  return (
    <tr className="">
      <td className="p-4">
        <p className="font-semibold leading-[10px]">Olivia Rhye</p>
        <p>olivia@company.com</p>
      </td>
      <td
        className={`flex items-center m-4 w-fit px-2 pr-[12px] rounded-xl ${
          color === "orange"
            ? "text-[#B93815] bg-[#FFF4ED]"
            : color === "green"
            ? "text-[#027A48] bg-[#ECFDF3]"
            : "text-[#344054] bg-[#F2F4F7]"
        }`}
      >
        <GoDotFill className="text-lg" />
        <span>{status}</span>
      </td>
      <td>This is the job title</td>
      <td className="">This is the department</td>
      <td className="">{lastOnline}</td>
      <td className="">
        <LuPen className="cursor-pointer font-bold text-xl" />
      </td>
      <td className="relative">
        <HiOutlineDotsVertical
          className="cursor-pointer font-bold text-xl"
          onClick={() => handleClick(id)}
        />
        {statusDropDown(status, id)}
      </td>
    </tr>
  );
};

export default UserCard;
