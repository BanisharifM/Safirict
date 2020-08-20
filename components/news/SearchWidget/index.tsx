const SearchWidget: React.FC = () => {
  return (
    <div className="search-widget">
      <div className="search">
        <form>
          <input type="text" placeholder="جستجو..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchWidget;
