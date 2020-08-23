import { IMenuProps } from "../models";

const NavItem: React.FC<IMenuProps> = ({ to, children }) => {
  return (
    <li>
      <a href={to}>
        <i className="fa fa-angle-right"></i>
        <span>{children}</span>
      </a>
    </li>
  );
};

export default NavItem;
