import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const BaseLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default BaseLayout;
