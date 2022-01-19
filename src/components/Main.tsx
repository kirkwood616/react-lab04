// import "./Main.css";
import { useState, useEffect } from "react";
import { fetchGiphy, fetchTrending } from "../services/GiphyApiService";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";
import { Data } from "../models/Giphy";

function Main() {
  const [gifs, setGifs] = useState<Data[]>([]);
  const [search, setSearch] = useState("");

  function handleSearchForm(searchTerm: string): void {
    setSearch(searchTerm);
  }

  useEffect(() => {
    // fetchGiphy(search).then((gifs) => setGifs(gifs));
    fetchTrending().then((gifs) => setGifs(gifs));
    console.log(gifs);
  }, []);

  return (
    <div className="Main">
      <SearchForm onSubmit={handleSearchForm} />
      <ResultsList />
    </div>
  );
}

export default Main;
