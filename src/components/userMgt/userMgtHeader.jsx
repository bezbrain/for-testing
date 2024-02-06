import React from "react";
import { GeneralInput, Input } from "../inputField";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { Button } from "../buttons";
import { useNavigate } from "react-router-dom";

const UserMgtHeader = () => {
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    navigate("/user-invite");
  };

  return (
    <header className="flex justify-between items-center mt-12">
      <h1 className="text-xl font-bold">User management</h1>

      <section className="flex items-center gap-8">
        <div className="relative h-fit">
          <GeneralInput
            placeholder="Search"
            inputCss="pl-10"
            inputStyle="h-fit"
          />
          <CiSearch className="absolute text-2xl top-1/2 left-2 translate-y-[-50%]" />
        </div>

        <div className="border-2 flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer">
          <IoFilterOutline />
          <span>Filters</span>
        </div>

        <Button
          btnContent="Add new user"
          handleClick={handleAddNewClick}
          btn="px-4"
        />
      </section>
    </header>
  );
};

export default UserMgtHeader;
