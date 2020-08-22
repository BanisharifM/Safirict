import React from "react";

interface IProps {
  to: string;
  icon: string;
}
const SocialItem: React.FC<IProps> = ({ to, icon }) => {
  return (
    <li>
      <a href={to}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialItem;
