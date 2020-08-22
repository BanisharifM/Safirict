import React from "react";

interface IProps {
  to: string;
}
const MenuItem:React.FC<IProps> = () => {
  return (
    <li>
      <a href="#welcome">خانه</a>
    </li>
  );
};

export default MenuItem;
