import React, { useState } from "react";
import "./SearchInput.css";

interface SearchInputProps{
  queryHandler: (val:string) => void,
}

const SearchInput: React.FC<SearchInputProps> = ({queryHandler}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const value = event.target.value;
    setSearchValue(value);
    if(!value){
      queryHandler(value);
    }
  }

  return (
    <div className="search-container">
      <i
        className="fa-solid fa-magnifying-glass search-icon"
        onClick={() => queryHandler(searchValue)}
      />
      <input
        className="search-input"
        type="text"
        placeholder="search..."
        value={searchValue}
        onChange={handleOnchange}
        onKeyDown={(event) =>
          event.key === "Enter" && queryHandler(searchValue)
        }
      />
    </div>
  );
};

export default SearchInput;
