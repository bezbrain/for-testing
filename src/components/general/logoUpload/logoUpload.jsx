import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const LogoUpload = ({ companyLogo, handleFileChange }) => {
  return (
    <div>
      <label htmlFor="" className="font-semibold pb-1 block">
        Company Logo
      </label>
      <label
        htmlFor="companyLogo"
        className="w-[200px] border-[2px] rounded-md p-4 block text-center"
      >
        <AiOutlineCloudUpload className="bg-[#F4EBFF] text-[#9F2936] text-5xl p-2 rounded-full cursor-pointer mx-auto" />
        <p className="cursor-pointer">
          <span className="block font-bold">
            {companyLogo ? companyLogo : "Click to upload"}
          </span>
          <span>or drag and drop SVG, PNG, JPG (max. 400x400px)</span>
        </p>
      </label>
      <input
        type="file"
        name="companyLogo"
        id="companyLogo"
        // value={companyLogo}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default LogoUpload;
