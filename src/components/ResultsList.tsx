import "./ResultsList.css";
import { Data } from "../models/Giphy";
import Result from "./Result";

interface Props {
  gifs: Data[];
}

function ResultsList({ gifs }: Props) {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      <div className="resultsListContainer">
        {gifs.map((gif, i) => (
          <Result key={i} gif={gif} />
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
