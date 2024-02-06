export const setToken = (token) => {
  return sessionStorage.setItem("accessToken", token);
};

export const getToken = () => {
  return sessionStorage.getItem("accessToken");
};

export const clearToken = () => {
  sessionStorage.removeItem("accessToken");
};
