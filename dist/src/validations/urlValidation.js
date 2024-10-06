"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipV6Validation =
  exports.ipV4Validation =
  exports.urlValidation =
    void 0;
const urlValidation = (url) => {
  const re = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
  return re.test(url);
};
exports.urlValidation = urlValidation;
const ipV4Validation = (ip) => {
  const re = /^(\d{1,3}\.){3}\d{1,3}$/;
  return re.test(ip);
};
exports.ipV4Validation = ipV4Validation;
const ipV6Validation = (ip) => {
  const re = /^([0-9a-f]{1,4}:){7}([0-9a-f]{1,4})$/;
  return re.test(ip);
};
exports.ipV6Validation = ipV6Validation;
