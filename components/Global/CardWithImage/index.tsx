import classnames from "classnames";
import AText from "./CText";
import Image from "./Image";

const index: React.FC<{
  url: string;
  className?: string;
  isLeft?: boolean;
}> = ({ url, children, isLeft = false, className='' }) => {
  return (
    <div className={classnames("about", { left: isLeft }, className)}>
      <Image url={url} />
      <AText>{children}</AText>
    </div>
  );
};

export default index;
