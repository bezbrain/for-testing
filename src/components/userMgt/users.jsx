import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import UserCard from "./userCard";
import { dummyArr } from "../../data/dummyArray";
import { useDispatch, useSelector } from "react-redux";
import {
  activeController,
  disableController,
  pendingController,
} from "../../management/features/userMgt/userMgtSlice";

const Users = () => {
  const { isPending, isActive, isDisable } = useSelector(
    (store) => store.userMgtStore
  );

  const dispatch = useDispatch();

  const handleUserClick = (index, status) => {
    if (status === "Pending") {
      dispatch(pendingController({ isPending, index }));
    } else if (status === "Active") {
      dispatch(activeController({ isActive, index }));
    } else if (status === "Disabled") {
      dispatch(disableController({ isDisable, index }));
    } else {
      return;
    }
  };

  return (
    <div className="">
      <table className="w-full mt-4 mb-8">
        <thead className="bg-[#F9FAFB]">
          <tr className="text-left opacity-60">
            <th className="p-4">Name</th>
            <th className="flex items-center gap-2 p-4">
              <span>Status</span> <FaArrowDown />
            </th>
            <th>Role</th>
            <th>Department</th>
            <th>Last online</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody className="border-b-2 border-slate-100">
          {dummyArr.map((each) => {
            const { id, status } = each;
            return (
              <UserCard
                key={id}
                {...each}
                handleClick={() => handleUserClick(id, status)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
