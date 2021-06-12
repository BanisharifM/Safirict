import React from "react";

const TextC: React.FC = ({ children }) => {
  return <p className="text" style={{wordWrap : 'break-word'}}>{children}</p>;
};

export default TextC;
