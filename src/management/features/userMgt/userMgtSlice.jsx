import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPending: false,
  isActive: false,
  isDisable: false,
};

const userMgtSlice = createSlice({
  name: "userMgt",
  initialState,
  reducers: {
    pendingController: (state, { payload }) => {
      const { isPending, index } = payload;
      state.isPending = isPending ? false : index;
      state.isActive = false;
      state.isDisable = false;
    },
    activeController: (state, { payload }) => {
      const { isActive, index } = payload;
      state.isActive = isActive ? false : index;
      state.isPending = false;
      state.isDisable = false;
    },
    disableController: (state, { payload }) => {
      const { isDisable, index } = payload;
      state.isDisable = isDisable ? false : index;
      state.isPending = false;
      state.isActive = false;
    },
  },
});

export const { pendingController, activeController, disableController } =
  userMgtSlice.actions;

export default userMgtSlice.reducer;
