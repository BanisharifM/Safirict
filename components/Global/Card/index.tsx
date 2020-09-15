import TextC from "components/Global/TextC";
import Button from "../Button";
import { INews } from "../models";
import CardImage from "./Image";
import CardMeta from "./Meta";
import CardTitle from "./Title";

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
