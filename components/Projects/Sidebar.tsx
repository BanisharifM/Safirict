import Category from "components/Global/Category";
import SearchWidget from "components/Global/SearchWidget";
import React from "react";
interface SidebarProps {
    handleSearch : (v : string) => void
}
const Sidebar:React.FC<SidebarProps> = ({handleSearch}) => {
  return (
    <div className="sidebar">
      <SearchWidget handleSearch={handleSearch} />
      <Category />
    </div>
  );
};

export default Sidebar;
