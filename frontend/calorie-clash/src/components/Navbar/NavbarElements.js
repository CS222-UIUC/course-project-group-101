// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background-color: #101B37;
  opacity: 0.9;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 99.7%;
`;
  
export const NavLink = styled(Link)`
  float: right;
  display: block;
  margin: auto;
  color: white;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 16;
  cursor: pointer;
  &.active {
    background: #01C8EE;
    color: black;
  }
`;
  
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;