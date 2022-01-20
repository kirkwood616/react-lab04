import "./ResultsList.css";
import { Data } from "../models/Giphy";
import Result from "./Result";

interface Props {
  gifs: Data[];
  search: string;
}

function ResultsList({ gifs, search }: Props) {
  return (
    <div className="ResultsList">
      {search ? <h2>Results for "{search}"</h2> : <h2>Trending</h2>}
      <div className="resultsListContainer">
        {gifs.map((gif, i) => (
          <Result key={i} gif={gif} />
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
