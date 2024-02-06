import { createSlice } from "@reduxjs/toolkit";
import {
  phoneCountryCodes,
  phoneNumberCall,
} from "../../action/superAdmin.action";

const initialState = {
  phoneCountryCodes: [],
  number: {
    phoneNumber: "",
  },
  codes: {
    phoneCode: "",
  },
  isLoadingCodes: false,
  isLoading: false,
  message: "",
  isColorController: false,
};

const numberSlice = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {
    numberInput: (state, { payload }) => {
      state.message = "";
      state.number.phoneNumber = payload;
    },
    numberCode: (state, { payload }) => {
      state.message = "";
      state.codes.phoneCode = payload;
    },
    updateMessage: (state, { payload }) => {
      state.message = payload;
    },
    colorControl: (state, { payload }) => {
      state.isColorController = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Phone and Country Codes extraReducer
      .addCase(phoneCountryCodes.pending, (state) => {
        state.message = "";
        state.isLoadingCodes = true;
      })
      .addCase(phoneCountryCodes.fulfilled, (state, { payload }) => {
        state.isLoadingCodes = false;
        state.phoneCountryCodes = payload;
      })
      .addCase(phoneCountryCodes.rejected, (state, { payload }) => {
        state.isLoadingCodes = false;
        state.message = payload.response.data.message;
      })
      // Phone Number extraReducer
      .addCase(phoneNumberCall.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(phoneNumberCall.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.isColorController = true;
        state.isLoading = false;
      })
      .addCase(phoneNumberCall.rejected, (state, { payload }) => {
        state.message = payload.response.data.message;
        state.isColorController = false;
        state.isLoading = false;
      });
  },
});

export const { numberInput, updateMessage, colorControl, numberCode } =
  numberSlice.actions;

export default numberSlice.reducer;
