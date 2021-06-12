import Button from "components/Global/Button";
import React from "react";

type Props = {
  url: string;
  title: string;
};
const Newsitem: React.FC<Props> = ({ url, title, children }) => {
  return (
    <div className="blog-post-thumb">
      <div className="img imgfix_top_container" style={{ overflow: "hidden" }}>
        <div
          id="imgfix_wrapper_layer_0_0"
          className="imgfix_wrapper_layer"
          style={{
            position: "relative",
            padding: "0",
            margin: "0",
            width: "100%",
            height: " 100%",
            overflow: "hidden",
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
      <div className="blog-content">
        <h3>
          <a href="blue-blog-single.html">
              {title}
          </a>
        </h3>
        <div className="text">{children}</div>
        {/* <Button text="بیشتر" type="primary" to={`/news/${title}`} /> */}
      </div>
    </div>
  );
};

export default Newsitem;
