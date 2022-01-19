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
      {/* <div className="resultsListContainer">
        {gifs.map((gif, i) => (
          <div className="gifContainer" key={i}>
            <h3>{gif.title}</h3>
            <img src={gif.images.fixed_height.url} alt="" />
            <a href={gif.url} target="_blank" rel="noopener noreferrer">
              Link to Giphy
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ResultsList;
