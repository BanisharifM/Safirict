interface IProps {
  author: string;
  comments: number;
}
const CardMeta: React.FC<IProps> = ({ author, comments }) => {
  return (
    <ul className="post-meta">
      <li>
        <a href="#">
          <span className="icon fa fa-user"></span>توسط {author}
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon fa fa-comment-o"></span>
          {comments} دیدگاه
        </a>
      </li>
    </ul>
  );
};
export default CardMeta;
