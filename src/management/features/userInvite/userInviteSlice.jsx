import { createSlice } from "@reduxjs/toolkit";
import { userInviteCall } from "../../action/superAdmin.action";
// import { setToken } from "../../../utils/token.utils";

const initialState = {
  newUser: {
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
  },
  isLoading: false,
  isDisable: false,
  message: "",
  isColorController: false,
};

const userInviteSlice = createSlice({
  name: "userInvite",
  initialState,
  reducers: {
    newUserInputs: (state, { payload }) => {
      state.message = "";
      const { value, name } = payload;
      state.newUser = {
        ...state.newUser,
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
      .addCase(userInviteCall.pending, (state) => {
        state.message = "";
        state.isLoading = true;
      })
      .addCase(userInviteCall.fulfilled, (state, { payload }) => {
        // setToken(payload.access_token);
        state.message = "Email sent successfully";
        state.isLoading = false;
        state.isColorController = true;
      })
      .addCase(userInviteCall.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.message = payload.response.data.message;
        state.isColorController = false;
      });
  },
});

export const { newUserInputs, updateMessage, colorControl } =
  userInviteSlice.actions;

export default userInviteSlice.reducer;
