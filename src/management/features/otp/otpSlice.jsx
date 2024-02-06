import { createSlice } from "@reduxjs/toolkit";
import { otpResendCall, otpVerifyCall } from "../../action/superAdmin.action";

const initialState = {
  number: {
    otp: "",
  },
  isLoading: false,
  isResendLoading: false,
  message: "",
  isColorController: false,
  isShowResend: false,
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    otpInput: (state, { payload }) => {
      state.message = "";
      state.number.otp = payload;
    },
    updateMessage: (state, { payload }) => {
      state.message = payload;
    },
    colorControl: (state, { payload }) => {
      state.isColorController = payload;
    },
    trackShowResend: (state) => {
      state.isShowResend = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // OTP Resend extraReducer
      .addCase(otpResendCall.pending, (state) => {
        state.message = "";
        state.isResendLoading = true;
      })
      .addCase(otpResendCall.fulfilled, (state, { payload }) => {
        state.message = payload;
        state.isColorController = true;
        state.isResendLoading = false;
      })
      .addCase(otpResendCall.rejected, (state, { payload }) => {
        state.message = payload.response.data.message;
        state.isColorController = false;
        state.isResendLoading = false;
      })
      // OTP Verify extraReducer
      .addCase(otpVerifyCall.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(otpVerifyCall.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.isColorController = true;
        state.isLoading = false;
        // data.data.phoneNumber
      })
      .addCase(otpVerifyCall.rejected, (state, { payload }) => {
        state.message = payload.response.data.message;
        state.isColorController = false;
        state.isLoading = false;
      });
  },
});

export const { otpInput, updateMessage, colorControl, trackShowResend } =
  otpSlice.actions;

export default otpSlice.reducer;
