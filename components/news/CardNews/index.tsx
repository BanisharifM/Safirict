import Button from "./Button";
import CardImage from "./CardImage";
import CardMeta from "./CardMeta";
import CardTitle from "./CardTitle";
import CardText from './CardText'

export interface INews {
  imageSrc: string;
  month: string;
  day: string;
  author: string;
  comments: number;
  title: string;
  content: string;
}
const index: React.FC<INews> = ({
  imageSrc,
  month,
  day,
  author,
  comments,
  title,
  content,
}) => {
  return (
    <div className="blog-post-thumb">
      <CardImage src={imageSrc} month={month} day={day} />
      <CardMeta author={author} comments={comments} />
      <CardTitle title={title} />
      <CardText>{content}</CardText>
      <Button text="بیشتر" type="primary" />
    </div>
  );
};
export default index;
