interface IProps {
  src: string;
  month: string;
  day: string;
}
const CardImage: React.FC<IProps> = ({ src, month, day }) => {
  return (
    <div className="img imgfix_top_container" style={{ overflow: "hidden" }}>
      <div
        id="imgfix_wrapper_layer_0_0"
        className="imgfix_wrapper_layer"
        style={{
          position: "relative",
          padding: "0",
          margin: "0",
          width: "100%",
          height: " 100%",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          //   src="assets/images/photos/blog/1.jpg"
          alt=""
          className="imgfix_src_img"
          style={{ opacity: "1" }}
        />
        <div className="date">
          <strong>{month}</strong>
          <span>{day}</span>
        </div>
      </div>
    </div>
  );
};
export default CardImage;
