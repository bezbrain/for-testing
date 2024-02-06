import axios from "axios";
import { getToken } from "../../utils/token.utils";
import config from "../../utils/config";

// SET PASSWORD ENDPOINT
export const setPassword = async (userPass) => {
  const { data } = await axios.post(`${config.baseUrl}/user/password`, {
    email: userPass.encryptedEmail,
    password: userPass.password,
  });
  //   console.log(data);
  return data;
};

// COUNTRY AND PHONE CODES ENDPOINT
export const codes = async () => {
  const accessToken = getToken();
  const { data } = await axios.get(`${config.baseUrl}/country`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // console.log(data);
  return data;
};

// PHONE NUMBER
export const phoneNumber = async (numberObj) => {
  const accessToken = getToken();
  const { phoneCode, phoneNumber } = numberObj;

  const { data } = await axios.post(
    `${config.baseUrl}/user/phone-number`,
    {
      countryPhoneCode: phoneCode,
      number: phoneNumber,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  // console.log(data);
  return data;
};

// OTP RESEND
export const otpResend = async () => {
  const accessToken = getToken();

  const { data } = await axios.post(
    `${config.baseUrl}/otp`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  // console.log(data);
  return data;
};

// VERIFY OTP
export const verifyOtp = async (otp) => {
  const accessToken = getToken();

  const { data } = await axios.post(
    `${config.baseUrl}/otp/verify`,
    { otp },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(data);
  return data;
};

// PERSONAL DETAILS
export const personalDetails = async (details) => {
  const accessToken = getToken();

  const data = await axios.post(
    `${config.baseUrl}/user/personal-details`,
    details,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log(data);
  return data;
};

// USER INVITE
export const addNewUser = async (user) => {
  const accessToken = getToken();

  const data = await axios.post(`${config.baseUrl}/user`, user, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(data);
  return data;
};
