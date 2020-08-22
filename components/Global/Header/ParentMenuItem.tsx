
interface IProps {
    title : string
    
}
const ParentMenuItem:React.FC<IProps> = ({title ,children}) => {
  return (
      <li className="submenu">
        <a href="#">{title}</a>
        <ul>
            {children}
        </ul>
      </li>
  );
};

export default ParentMenuItem;
