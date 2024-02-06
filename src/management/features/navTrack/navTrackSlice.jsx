import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFullNav: false,
};

const navTrackSlice = createSlice({
  name: "navTrack",
  initialState,
  reducers: {
    isNav: (state, { payload }) => {
      state.isFullNav = true;
    },
  },
});

export const { isNav } = navTrackSlice.actions;

export default navTrackSlice.reducer;
