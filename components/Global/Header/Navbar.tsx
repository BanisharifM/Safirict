import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import UL from "../UL";
import MenuTrigger from "./MenuTrigger";
import { navbarItems, renderNav } from "./navbarConfig";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleTriggerClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleResize = () => {
    window.innerWidth > 991 ? setMenuOpen(true) : setMenuOpen(false);
  };
  useEffect(() => {
    setMenuOpen(window.innerWidth > 990);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="main-nav">
      <NavbarLogo />
      <CSSTransition
        in={menuOpen}
        timeout={1000}
        classNames="nav"
        mountOnEnter
        unmountOnExit
      >
        <UL className="nav">{renderNav(navbarItems)}</UL>
      </CSSTransition>
      <MenuTrigger active={menuOpen} onClick={handleTriggerClick} />
    </nav>
  );
};

export default Navbar;
