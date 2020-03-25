export function getUserIdFromCookie() {
  console.log(document.cookie.userid);
  return (
    document.cookie
      .split(";")
      .filter(string => string.substring(0, 6) === "userid").length > 0
  );
}

export default getUserIdFromCookie;
