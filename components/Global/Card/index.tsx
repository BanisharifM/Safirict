import TextC from "components/Global/TextC";
import Button from "../Button";
import { INews } from "../models";
import CardImage from "./Image";
import CardMeta from "./Meta";
import CardTitle from "./Title";

type Props = INews & { type: "news" | "projects" };
const index: React.FC<Props> = ({
  type,
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
      <Button text="بیشتر" type="primary" to={`/${type}/${title}`} />
    </div>
  );
};
export default index;
