const hasUpperCase = (str) => /[A-Z]/.test(str);
const hasLoweCase = (str) => /[a-z]/.test(str);
const hasNumber = (str) => /[0-9]/.test(str);
const hasSpecialCharacter = (str) => /[^a-zA-Z0-9]/.test(str);

// Password security check
export const isCheck = (value, newCharacters) => {
  if (hasLoweCase(value)) {
    newCharacters.push(2);
  }
  if (hasUpperCase(value)) {
    newCharacters.push(1);
  }
  if (hasNumber(value)) {
    newCharacters.push(3);
  }
  if (hasSpecialCharacter(value)) {
    newCharacters.push(4);
  }
  if (value.length >= 8) {
    newCharacters.push(5);
  }
};

// Password and confirmPassword check
export const isPasswordsCheck = (password, value, setIsMatch) => {
  if (password === value) {
    setIsMatch(true);
  } else {
    setIsMatch(false);
  }
};
