import React from "react";

type Props = {
  icon: string;
  title: string;
};
const FeatureItem: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-6 col-12"
      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
      data-scroll-reveal-id="1"
      data-scroll-reveal-initialized="true"
      data-scroll-reveal-complete="true"
    >
      <a
        className="features-small-item"
        style={{ cursor: "pointer", minHeight: "330px" }}
      >
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h5 className="features-title">{title}</h5>
        <p>{children}</p>
      </a>
    </div>
  );
};

export default FeatureItem;
