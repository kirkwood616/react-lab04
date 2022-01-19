import axios from "axios";
import { Data } from "../models/Giphy";

export function fetchTrending(): Promise<Data[]> {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY || "";

  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data.data);
}

export function fetchSearch(query: string): Promise<Data[]> {
  const apiKey = process.env.REACT_APP_GIPHY_API_KEY || "";

  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: apiKey,
        q: query,
      },
    })
    .then((res) => res.data.data);
}

// export function fetchGiphy(query: string): Promise<Data[]> {
//   let endPoint = query ? "search" : "trending";

//   const apiKey = process.env.REACT_APP_GIPHY_API_KEY || "";

//   const trendingParams = {
//     api_key: apiKey,
//   };

//   const queryParams = {
//     api_key: apiKey,
//     q: query,
//   };

//   let params = query ? queryParams : trendingParams;

//   return axios
//     .get(`https://api.giphy.com/v1/gifs/${endPoint}`, {
//       params: params,
//     })
//     .then((res) => res.data.data);
// }
