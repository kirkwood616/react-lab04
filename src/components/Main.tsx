// import "./Main.css";
import { useState, useEffect } from "react";
import { fetchGiphy } from "../services/GiphyApiService";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

function Main() {
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGiphy(search).then((gifs) => setGifs(gifs));
    console.log(gifs);
  }, [search]);

  function handleSearchForm(searchTerm: string): void {
    setSearch(searchTerm);
  }

  return (
    <div className="Main">
      <SearchForm onSubmit={handleSearchForm} />
      <ResultsList />
    </div>
  );
}

export default Main;
