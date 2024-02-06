import { createSlice } from "@reduxjs/toolkit";
import { createPassword } from "../../action/superAdmin.action";
import { setToken } from "../../../utils/token.utils";

const initialState = {
  user: {
    password: "",
    confirmPassword: "",
  },
  isLoading: false,
  message: "",
  isColorController: false,
};

const setPasswordSlice = createSlice({
  name: "setPassword",
  initialState,
  reducers: {
    setPasswordInputs: (state, { payload }) => {
      state.message = "";
      const { name, value } = payload;
      state.user = {
        ...state.user,
        [name]: value,
      };
    },
    setConfirmPasswordInputs: (state, { payload }) => {
      state.message = "";
      const { name, value } = payload;
      state.user = {
        ...state.user,
        [name]: value,
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
      .addCase(createPassword.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(createPassword.fulfilled, (state, { payload }) => {
        // console.log(payload.access_token);
        // setToken(payload.access_token);
        state.message = "Password set successfully";
        state.isLoading = false;
        state.isColorController = true;
      })
      .addCase(createPassword.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload.message === "Network Error") {
          state.message = `${payload.message}. Please try again!`;
        } else {
          state.message = payload.response.data.message;
        }
        state.isColorController = false;
      });
  },
});

export const {
  setPasswordInputs,
  setConfirmPasswordInputs,
  updateMessage,
  colorControl,
} = setPasswordSlice.actions;

export default setPasswordSlice.reducer;
