import "./Result.css";
import { Data } from "../models/Giphy";

interface Props {
  gif: Data;
}

function Result({ gif }: Props) {
  return (
    <div className="Result">
      <h3>{gif.title}</h3>
      <img src={gif.images.fixed_height.url} alt="" />
      <a
        href={gif.url}
        target="_blank"
        rel="noopener noreferrer"
        className="giphyLink"
      >
        Link to Giphy
      </a>
    </div>
  );
}

export default Result;
