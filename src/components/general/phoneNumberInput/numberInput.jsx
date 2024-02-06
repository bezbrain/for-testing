import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../helper";

const NumberInput = ({
  phoneNumber,
  handleNumberChange,
  labelContent,
  handleNumberCode,
}) => {
  const { isLoadingCodes, phoneCountryCodes } = useSelector(
    (store) => store.numberStore
  );

  return (
    <div>
      <label className="font-semibold">{labelContent}</label>
      <div className="relative">
        {isLoadingCodes ? (
          <Loader loaderCss="absolute left-4 flex top-[10%]" />
        ) : (
          <select
            name=""
            id=""
            className="absolute left-2 flex top-[50%] translate-y-[-50%] cursor-pointer w-[100px]"
            onChange={handleNumberCode}
          >
            {phoneCountryCodes.map((each, i) => {
              return (
                <option value={each.phoneCode} key={i}>
                  {each.countryCodeAndPhoneCode}
                </option>
              );
            })}
          </select>
        )}
        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleNumberChange}
          placeholder="123 456 7890"
          className="border-2 w-full h-[40px] rounded-md text-center"
        />
      </div>
    </div>
  );
};

export default NumberInput;
