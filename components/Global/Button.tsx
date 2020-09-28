import NextLink from "next/link";
interface IProps {
  text: string;
  type: "primary";
  to : string
}
const Button: React.FC<IProps> = ({ text, type , to }) => {
  return (
    <NextLink href={to}>
      <a href="blue-blog-single.html" className={`btn-${type}-line`}>
        {text}
      </a>
    </NextLink>
  );
};

export default Button;
