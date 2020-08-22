import React from "react";
import UL from "../UL";
import MenuItem from "./MenuItem";
import MenuTrigger from "./MenuTrigger";
import NavbarLogo from "./NavbarLogo";
import ParentMenuItem from "./ParentMenuItem";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavbarLogo />
      <UL className="nav">
        <MenuItem to="/">خانه</MenuItem>
        <ParentMenuItem title="خدمات">
          <MenuItem to="/">حوزه شبکه</MenuItem>
          <MenuItem to="/">دیگر خدمات</MenuItem>
        </ParentMenuItem>
        <MenuItem to="/">وبلاگ و اخبار</MenuItem>
        <ParentMenuItem title="درباره ما">
          <MenuItem to="/">معرفی شرکت</MenuItem>
          <MenuItem to="/">مشتریان ما</MenuItem>
        </ParentMenuItem>
        <MenuItem to="/">تماس با ما</MenuItem>
      </UL>
      <MenuTrigger />
    </nav>
  );
};

export default Navbar;
