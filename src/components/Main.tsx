// import "./Main.css";
import { useState, useEffect } from "react";
import { fetchSearch, fetchTrending } from "../services/GiphyApiService";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";
import { Data, Images, FixedHeightImage } from "../models/Giphy";

function Main() {
  const [gifs, setGifs] = useState<Data[]>([]);
  const [search, setSearch] = useState("");

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
      <ResultsList />
      <div>
        {gifs.map((gif, i) => (
          <li key={i}>
            {gif.title}
            <img src={gif.images.fixed_height.url} alt="" />
          </li>
        ))}
      </div>
    </div>
  );
}

export default Main;
