import React from "react";
import UL from "../UL";
import NavItem from "./NavItem";

const Nav: React.FC = () => {
  return (
    <UL className="footer-nav">
      <NavItem to="/">خانه</NavItem>
      <NavItem to="/about">معرفی شرکت</NavItem>
      <NavItem to="/customers">مشتریان ما</NavItem>
      <NavItem to="/contact-us">تماس با ما</NavItem>
    </UL>
  );
};

export default Nav;
