import classnames from "classnames";
import Link from "next/link";
import React from "react";
import { IMenuProps } from "../models";

const MenuItem: React.FC<IMenuProps & { active?: boolean }> = ({
  children,
  to,
  active = false,
}) => {
  return (
    <li className={classnames({ active })}>
      {active ? (
         children 
      ) : (
        <Link href={to}>
          <a>{children}</a>
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
