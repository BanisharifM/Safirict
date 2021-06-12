import Link from "next/link";
import React from "react";

const NavbarLogo = () => {
  return (
    <Link href="/">
      <a className="logo">
        <img
          src="/images/photos/safirlogo.png"
          alt="logo"
          style={{ width: "27px", height: "29px" }}
        />
      </a>
    </Link>
  );
};

export default NavbarLogo;
