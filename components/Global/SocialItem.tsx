import React from "react";
import { ISocial } from "./models";

const SocialItem: React.FC<ISocial> = ({ href, icon }) => {
  return (
    <li>
      <a href={href}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialItem;
