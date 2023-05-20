import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
  margin-bottom: 40px;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  border-bottom: 7px solid #ebd8ff;
  height: 55px;
`;

export const NavItem = styled(NavLink)`
  align-items: center;
  font-size: xx-large;
  border-radius: 4px;
  text-decoration: none;
  color: #373737;
  padding: 15px;

  &.active {
    color: #ebd8ff;
    border-radius: 20px;
    background-color: #471ca9;
    border: 3px solid #ebd8ff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ebd8ff;
    text-shadow: 0px 0px 50px rgba(11, 0, 0, 1);
  }
`;
