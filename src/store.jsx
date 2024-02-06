import { configureStore } from "@reduxjs/toolkit";
import setPasswordSReducer from "./management/features/setPassword/setPasswordSlice";
import numberReducer from "./management/features/phoneNumber/numberSlice";
import otpReducer from "./management/features/otp/otpSlice";
import personalReducer from "./management/features/personalDetails/personalSlice";
import navTrackReducer from "./management/features/navTrack/navTrackSlice";
import userMgtReducer from "./management/features/userMgt/userMgtSlice";
import userInviteReducer from "./management/features/userInvite/userInviteSlice";

export const store = configureStore({
  reducer: {
    setPasswordStore: setPasswordSReducer,
    numberStore: numberReducer,
    otpStore: otpReducer,
    personalDetailsStore: personalReducer,
    navTrackStore: navTrackReducer,
    userMgtStore: userMgtReducer,
    userInviteStore: userInviteReducer,
  },
  // This is used to stop the non-serialized error that Redux toolkit returns
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
