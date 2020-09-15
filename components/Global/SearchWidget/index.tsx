import { FormEvent, useState } from "react";

interface SearchWidgetProps {
  handleSearch: (v: string) => void;
}
const SearchWidget: React.FC<SearchWidgetProps> = ({ handleSearch }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <div className="search-widget">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.currentTarget.value)}
            type="text"
            placeholder="جستجو..."
            value={value}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchWidget;
