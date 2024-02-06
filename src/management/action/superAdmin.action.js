import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewUser,
  codes,
  personalDetails,
  phoneNumber,
  setPassword,
} from "../service/superAmin.service";
import { otpResend } from "../service/superAmin.service";
import { verifyOtp } from "../service/superAmin.service";
import { saveNumber } from "../../utils/savePhoneNumber";
import { saveUserRole } from "../../utils/saveUserRole";
import { setToken } from "../../utils/token.utils";

// SET PASSWORD ENDPOINT
export const createPassword = createAsyncThunk(
  "actions/createPassword",
  async (adminData, thunkAPI) => {
    try {
      const { password, encryptedEmail, navigate } = adminData;
      const { data } = await setPassword({ password, encryptedEmail });
      // console.log(data.access_token);
      // Save user type to storage
      saveUserRole(data.user.userRole);
      // Save token to storage
      setToken(data.access_token);
      // Navigate to next page
      setTimeout(() => {
        navigate("/phone-number");
      }, 1500);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// COUNTRY AND PHONE CODES ENDPOINT
export const phoneCountryCodes = createAsyncThunk(
  "actions/phoneCountryCodes",
  async (_, thunkAPI) => {
    try {
      const { data } = await codes();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// PHONE NUMBER
export const phoneNumberCall = createAsyncThunk(
  "action/phoneNumberCall",
  async (phoneDetails, thunkAPI) => {
    try {
      const { navigate } = phoneDetails;
      const { data } = await phoneNumber(phoneDetails);
      saveNumber(data.phoneNumber);
      // Navigate to next page
      setTimeout(() => {
        navigate("/otp-verification");
      }, 1500);

      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// OTP RESEND
export const otpResendCall = createAsyncThunk(
  "action/otpResendCall",
  async (_, thunkAPI) => {
    try {
      const { data } = await otpResend();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// VERIFY OTP
export const otpVerifyCall = createAsyncThunk(
  "action/otpVerifyCall",
  async (otpDetails, thunkAPI) => {
    const { navigate, otp } = otpDetails;
    try {
      const data = await verifyOtp(otp);
      // Navigate to next page
      setTimeout(() => {
        navigate("/personal-details");
      }, 1500);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// PERSONAL DETAILS
export const personalDetailsCall = createAsyncThunk(
  "action/personalDetails",
  async (details, thunkAPI) => {
    try {
      const { newPersonalDetails, navigate } = details;
      // console.log(newPersonalDetails);
      const { data } = await personalDetails(newPersonalDetails);
      console.log(data.data.userRole);
      if (data.data.userRole === "ADMIN") {
        navigate("/user-management");
      } else {
        navigate("/");
      }
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// USER INVITE
export const userInviteCall = createAsyncThunk(
  "action/userInvite",
  async (newUser, thunkAPI) => {
    try {
      // console.log(newUser);
      const { data } = await addNewUser(newUser);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
