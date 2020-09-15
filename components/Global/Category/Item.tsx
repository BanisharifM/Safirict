import React from "react";
import { ICategoryListItem } from "../models";

const Item: React.FC<ICategoryListItem> = ({ name, count }) => {
  return (
    <li>
      <a href="#">
        {name} <span>{count}</span>
      </a>
    </li>
  );
};

export default Item;
