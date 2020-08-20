interface IProps {
  text: string;
  type: "primary";
}
const Button: React.FC<IProps> = ({ text, type }) => {
  return (
    <a href="blue-blog-single.html" className={`btn-${type}-line`}>
      {text}
    </a>
  );
};

export default Button;
