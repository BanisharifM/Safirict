import React from "react";
import { IMenuProps } from "../models";

const MenuItem: React.FC<IMenuProps> = ({ children }) => {
  return (
    <li>
      <a href="#welcome">{children}</a>
    </li>
  );
};

export default MenuItem;
