import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  onSubmit: (searchTerm: string) => void;
}

function SearchForm({ onSubmit }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm("");
  }

  return (
    <div className="SearchForm" onSubmit={handleSubmit}>
      <form className="searchFormInput">
        <label htmlFor="searchInput">
          <p>Search for a GIF</p>
        </label>
        <div className="searchBar">
          <input
            type="text"
            id="searchInput"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
