"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordStrengthValidation = void 0;
const passwordStrengthValidation = (password) => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};
exports.passwordStrengthValidation = passwordStrengthValidation;
