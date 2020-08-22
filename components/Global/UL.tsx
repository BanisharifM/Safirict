import React from "react";

interface IProps {
  className?: string;
}
const UL: React.FC<IProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export default UL;
