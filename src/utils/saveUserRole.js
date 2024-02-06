export const saveUserRole = (role) => {
  return localStorage.setItem("userRole", role);
};

export const getUserRole = () => {
  return localStorage.getItem("userRole");
};

export const removeUserRole = () => {
  return localStorage.removeItem("userRole");
};
