import React from "react";
import MenuItem from "./MenuItem";
import NavbarLogo from "./NavbarLogo";
import NavbarUl from "./NavbarUl";
import ParentMenuItem from "./ParentMenuItem";
import MenuTrigger from "./MenuTrigger";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavbarLogo />
      <NavbarUl>
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
      </NavbarUl>
      <MenuTrigger/>
    </nav>
  );
};

export default Navbar;
