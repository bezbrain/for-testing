import { authImage } from "../../assets/images";

const AuthImage = () => {
  return (
    <div className="hidden w-[50%] absolute right-0 md:block md:min-h-[90vh] lg:max-h-full">
      <img
        src={authImage}
        alt="Auth-image"
        className="w-[100%] md:min-h-[90vh] lg:max-h-[90vh]"
      />
    </div>
  );
};

export default AuthImage;
