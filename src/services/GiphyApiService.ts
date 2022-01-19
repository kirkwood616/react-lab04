import axios from "axios";

export function fetchGiphy(query: string) {
  let endPoint = query ? "search" : "trending";

  const apiKey = "XImD5aPL9dt75PxzMRO0jQ4Ka8Qr5QiH";

  const trendingParams = {
    api_key: apiKey,
  };

  const queryParams = {
    api_key: apiKey,
    q: query,
  };

  // let params = query ? queryParams : trendingParams;

  return axios
    .get(`https://api.giphy.com/v1/gifs/${endPoint}`, {
      params: query ? queryParams : trendingParams,
    })
    .then((res) => res.data);
}
