import TextC from "components/Global/TextC";
import Button from "../../Global/Button";
import CardImage from "./CardImage";
import CardMeta from "./CardMeta";
import CardTitle from "./CardTitle";

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
      <TextC>{content}</TextC>
      <Button text="بیشتر" type="primary" />
    </div>
  );
};
export default index;
