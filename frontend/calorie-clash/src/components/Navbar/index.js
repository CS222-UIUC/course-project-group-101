import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  //Changes from logout/login depending on if user is logged in or not
  let login;
  if(window.localStorage.getItem("UID") === null) {
    login = <NavLink to="/login" activeStyle> Login </NavLink>
  } else {
    login = <NavLink to="/logout" activeStyle> Log Out </NavLink>
  }
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/get-started" activeStyle>
            Get Started
          </NavLink>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/leaderboard" activeStyle>
            Leaderboard
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/rival" activeStyle>
            Rival
          </NavLink>
          {login}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;