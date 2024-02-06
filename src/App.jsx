import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SetPassword,
  Home,
  Signin,
  Error,
  SharedLayout,
  PhoneNumber,
  OtpVerification,
  PersonalDetails,
  UserManagement,
  UserInvite,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SharedLayout />}>
          <Route exact index element={<Home />} />
          <Route path="set-password" element={<SetPassword />} />
          <Route path="phone-number" element={<PhoneNumber />} />
          <Route path="otp-verification" element={<OtpVerification />} />
          <Route path="personal-details" element={<PersonalDetails />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="user-invite" element={<UserInvite />} />
          <Route path="sign-in" element={<Signin />} />

          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
