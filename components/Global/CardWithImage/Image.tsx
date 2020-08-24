import React from "react";

const Image: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div
      className="about-image imgfix_top_container"
      style={{ overflow: "hidden" }}
    >
      <div
        id="imgfix_wrapper_layer_0_1"
        className="imgfix_wrapper_layer"
        style={{
          position: "relative",
          padding: "0",
          margin: "0",
          width: "100%",
          height: "100%",
          overflow: " hidden",
        }}
      >
        <img
          src={url}
          alt=""
          className="imgfix_src_img"
          style={{ opacity: "1" }}
        />
      </div>
    </div>
  );
};

export default Image;
