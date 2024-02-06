import { createSlice } from "@reduxjs/toolkit";
import { personalDetailsCall } from "../../action/superAdmin.action";
import { removeNumber } from "../../../utils/savePhoneNumber";

const initialState = {
  personal: {
    title: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    department: "",
    phoneNumber: "",
    address: "",
    preferEmailContact: true,
    preferPhoneContact: false,
    companyLogo: "",
  },
  isLoading: false,
  message: "",
  isColorController: false,
};

const personalSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {
    personalInputs: (state, { payload }) => {
      state.message = "";
      const { value, name } = payload;
      state.personal = {
        ...state.personal,
        [name]: value,
      };
    },
    fileInput: (state, { payload }) => {
      // console.log(payload);
      state.personal.companyLogo = payload;
    },
    checkedInput: (state, { payload }) => {
      state.message = "";
      const { checked, name } = payload;
      state.personal = {
        ...state.personal,
        [name]: checked,
      };
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
      .addCase(personalDetailsCall.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(personalDetailsCall.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.isColorController = true;
        state.isLoading = false;
        removeNumber(); // Remove number from local storage
      })
      .addCase(personalDetailsCall.rejected, (state, { payload }) => {
        state.message = payload.response.data.message;
        state.isColorController = false;
        state.isLoading = false;
      });
  },
});

export const {
  personalInputs,
  fileInput,
  checkedInput,
  updateMessage,
  colorControl,
} = personalSlice.actions;

export default personalSlice.reducer;
