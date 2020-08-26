import React from "react";

const SectionButton: React.FC = ({ children }) => {
  return (
    <a className="btn-home" href="#fh1">
      <i className="fa fa-angle-right"></i>
      <span>{children}</span>
    </a>
  );
};

export default SectionButton;
