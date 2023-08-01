import './searchBox.scss';

function SearchBox({ value, onChange, cms: { placeholder} }) {
  // Handle the change event on the input element.
  const handleOnChange = (event) => {
    const value = event.target.value;
    onChange(value);
  }

  return (
    <div className='searchBox formElement'>
      <input
        className="searchInput"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <span className="material-symbols-outlined material-icons md-32 searchIcon">search</span>
    </div>
  );
}

export default SearchBox;