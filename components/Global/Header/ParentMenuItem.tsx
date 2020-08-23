import classnames from "classnames";
import { useState } from "react";
import { IParentProps } from "../models";
import MenuItem from "./MenuItem";

const ParentMenuItem: React.FC<IParentProps> = ({ title, items }) => {
  const [active, setActive] = useState(false);
  return (
    <li className="submenu" onClick={() => setActive(!active)}>
      <a href="#">{title}</a>
      <ul className={classnames({ active })}>
        {items.map((item, i) => (
          <MenuItem key={i} to={item.path}>
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </li>
  );
};

export default ParentMenuItem;
