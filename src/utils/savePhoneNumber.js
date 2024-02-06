export const saveNumber = (mobileNumber) => {
  return localStorage.setItem("number", mobileNumber);
};

export const getNumber = () => {
  return localStorage.getItem("number");
};

export const removeNumber = () => {
  return localStorage.removeItem("number");
};
