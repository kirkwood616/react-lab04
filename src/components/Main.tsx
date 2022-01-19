// import "./Main.css";
import { useState, useEffect } from "react";
import { fetchSearch, fetchTrending } from "../services/GiphyApiService";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";
import { Data } from "../models/Giphy";

function Main() {
  const [gifs, setGifs] = useState<Data[]>([]);
  const [search, setSearch] = useState<string>("");

  function handleSearchForm(searchTerm: string): void {
    setSearch(searchTerm);
  }

  useEffect(() => {
    if (search) {
      fetchSearch(search).then((gifs) => setGifs(gifs));
    } else {
      fetchTrending().then((data) => setGifs(data));
    }
  }, [search]);

  return (
    <div className="Main">
      <SearchForm onSubmit={handleSearchForm} />
      <ResultsList gifs={gifs} />
    </div>
  );
}

export default Main;
