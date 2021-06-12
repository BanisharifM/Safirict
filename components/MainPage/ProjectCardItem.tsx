import classnames from "classnames";
type Props = {
  title: string;
  active?: boolean;
  index: number;
};
const ProjectCardItem: React.FC<Props> = ({
  title,
  active = false,
  index,
  children,
}) => {
  return (
    <div className={classnames("pricing-item", { active })}>
      <div className="pricing-header">
        <h3 className="pricing-title">{title}</h3>
      </div>
      <div className="pricing-body" style={{ marginBottom: "0" }}>
        <div className="number">
          <span>{index}</span>
        </div>
        <ul className="list" style={{ padding: "25px" }}>
          <li
            className="active"
            style={{
              textAlign: "justify",
              padding: "0 20px",
              lineHeight: "1.5rem",
            }}
          >
            {children}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCardItem;
