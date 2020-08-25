import SocialItem from "components/Global/SocialItem";
import UL from "components/Global/UL";
import React from "react";
import { socialItems } from "./socialItems";

const Share = () => {
  return (
    <UL className="share">
      {socialItems.map((s) => (
        <SocialItem {...s} />
      ))}
    </UL>
  );
};

export default Share;
