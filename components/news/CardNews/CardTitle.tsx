interface IProps {
  title: string;
}
const CardTitle: React.FC<IProps> = ({ title }) => {
  return (
    <h3>
      <a href="blue-blog-single.html">
          {title}
      </a>
    </h3>
  );
};
export default CardTitle;
