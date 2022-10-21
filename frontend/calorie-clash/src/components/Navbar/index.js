import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
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
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;