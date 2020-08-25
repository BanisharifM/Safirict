import React from "react";

const Image: React.FC<{ image: string; month: string; day: string }> = () => {
  return (
    <div>
      <div className="img imgfix_top_container" style={{ overflow: "hidden" }}>
        <div
          id="imgfix_wrapper_layer_0_0"
          className="imgfix_wrapper_layer"
          style={{
            position: "relative",
            padding: " 0",
            margin: " 0",
            width: " 100%",
            height: "100%",
            overflow: " hidden",
          }}
        >
          <img
            src="/images/photos/about/2.jpg"
            alt=""
            className="imgfix_src_img"
            style={{ opacity: 1 }}
          />
          <div className="date">
            <strong>APR</strong>
            <span>09</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
