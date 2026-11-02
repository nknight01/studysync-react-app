
function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search study tools..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
