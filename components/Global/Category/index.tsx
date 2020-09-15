import React from "react";
import { fakeCategories } from "utils/constants";
import UL from "../UL";
import Item from "./Item";

const index = () => {
  return (
    <UL>
      {fakeCategories.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </UL>
  );
};

export default index;
