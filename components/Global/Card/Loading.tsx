import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={350}
    viewBox="0 0 350 350"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="14" y="15" rx="10" ry="10" width="306" height="156" />
    <circle cx="576" cy="328" r="13" />
    <circle cx="296" cy="186" r="10" />
    <rect x="213" y="185" rx="2" ry="2" width="65" height="6" />
    <circle cx="151" cy="190" r="10" />
    <rect x="70" y="188" rx="2" ry="2" width="65" height="6" />
    <rect x="27" y="205" rx="0" ry="0" width="276" height="13" />
    <rect x="176" y="224" rx="0" ry="0" width="127" height="13" />
    <rect x="27" y="251" rx="0" ry="0" width="276" height="8" />
    <rect x="177" y="302" rx="0" ry="0" width="127" height="30" />
    <rect x="28" y="267" rx="0" ry="0" width="276" height="8" />
    <rect x="28" y="284" rx="0" ry="0" width="276" height="8" />
  </ContentLoader>
);

export default Loading;
