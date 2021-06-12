import React from "react";

const SectionButton: React.FC = ({ children }) => {
  return (
    <div className="btn-home d-flex justify-content-center" >
      <span>{children}</span>
    </div>
  );
};

export default SectionButton;
