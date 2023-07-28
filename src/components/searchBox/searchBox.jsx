import './searchBox.scss';

function SearchBox({ value, onChange }) {
  // Handle the change event on the input element.
  const handleOnChange = (event) => {
    const value = event.target.value;
    onChange(value);
  }

  return (
    <>
    <div className='searchBoxContainer formElement'>
      <input
        className="searchInput"
        type="text"
        placeholder="Find participant"
        value={value}
        onChange={handleOnChange}
      />
      <span class="material-symbols-outlined material-icons md-32 searchIcon">search</span>
    </div>
    </>
  );
}

export default SearchBox;