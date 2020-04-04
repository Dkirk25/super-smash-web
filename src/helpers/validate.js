function isBlank(str) {
  if (str.length > 0) return true;
  return false;
}

function isString(str) {
  return typeof str === "string";
}

function validate(str) {
  return isString(str) && isBlank(str);
}

export default validate;
