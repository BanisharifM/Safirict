import UL from "components/Global/UL";
import React from "react";

const Meta: React.FC<{ author: string; comments: string }> = () => {
  return (
    <UL className="post-meta margin-bottom-20">
      <li>
        <a href="#">
          <span className="icon fa fa-user"></span>by Hexagon
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon fa fa-comment-o"></span>3 Comments{" "}
        </a>
      </li>
    </UL>
  );
};

export default Meta;
