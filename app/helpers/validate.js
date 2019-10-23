



const isBlank = (string) => {
  if(string.length > 0) return true;
  return false;
}


const isString = (string) => {
  if(typeof string === 'string') return true;
  return false;
}

const validate = (string) => {
  if(isString(string)) {
    if(isBlank(string)) {
      return true;
    }
  }

  return false;
}

export default validate;


