export default () => {
  console.log(document.cookie.userid);
  if(document.cookie.split(';').filter((string) => {
    if(string.substring(0,6) === 'userid') return string;
  })[0]) return true;
  return false;
}