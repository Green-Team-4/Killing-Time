import axios from "axios";
import { useEffect, useState } from "react";
import MovieInfoItem from "./MovieInfoItem";

const MovieInfo = ({ id }) => {
  const [result, setResult] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const loadMoiveDetail = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
      // https://api.themoviedb.org/3/movie/436270?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR
      const url_provider = `${baseUrl}/${id}/watch/providers?api_key=${apiKey}`;
      // https://api.themoviedb.org/3/movie/436270/watch/providers?api_key=403cc00da7a7725917c9acd69484bde6
      const response = await axios.get(url);
      const resp_provider = await axios.get(url_provider);
      setResult(response.data);
      setProvider(resp_provider.data.results.KR);
    };
    loadMoiveDetail();
  }, [id]);

  if (!result) {
    return;
  }

  return (
    <>
      <MovieInfoItem result={result} provider={provider} />
    </>
  );
};

export default MovieInfo;
