//Logs out of account and returns to home page
const Logout = () => {
  window.localStorage.clear();
  window.open("/home", "_self");
};
  
export default Logout;