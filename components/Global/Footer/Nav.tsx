import React from "react";
import UL from "../UL";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  return (
    <UL className="footer-nav">
      <NavItem to="/">خدمات ما</NavItem>
      <NavItem to="/">پروژه‌ها</NavItem>
      <NavItem to="/">درباره‌ ما</NavItem>
      <NavItem to="/">خدمات ما</NavItem>
    </UL>
  );
};

export default Nav;
