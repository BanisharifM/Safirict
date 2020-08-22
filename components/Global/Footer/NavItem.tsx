import { IMenuItem } from "../model";

const NavItem: React.FC<IMenuItem> = ({ to, children }) => {
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
