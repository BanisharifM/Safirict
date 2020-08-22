import React from "react";
import { IMenuItem } from "../model";

const MenuItem:React.FC<IMenuItem> = ({children}) => {
  return (
    <li>
      <a href="#welcome">{children}</a>
    </li>
  );
};

export default MenuItem;
