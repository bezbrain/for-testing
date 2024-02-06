import { AuthImage } from "../components/authImage";
import { AuthWrap } from "../components/authWrapper";
import SetPasswordComp from "../components/setPassword/setPass.comp";

const SetPassword = () => {
  return (
    <AuthWrap>
      <SetPasswordComp />
      <AuthImage />
    </AuthWrap>
  );
};

export default SetPassword;
