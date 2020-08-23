import classnames from "classnames";
import { MouseEvent } from "react";
interface IProps {
  active: boolean;
  onClick: (e: MouseEvent<any>) => void;
}
const MenuTrigger: React.FC<IProps> = ({ active, onClick }) => {
  return (
    <a className={classnames("menu-trigger", { active })} onClick={onClick}>
      <span>منو</span>
    </a>
  );
};

export default MenuTrigger;
