import React from "react";

const Item: React.FC = ({ children }) => {
  return (
    <li className="page-item">
      <a className="page-link">{children}</a>
    </li>
  );
};

export default Item;
