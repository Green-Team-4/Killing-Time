import axios from "axios";
import { useEffect, useState } from "react";
import MovieInfoItem from "./MovieInfoItem";

const MovieInfo = ({ id }) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const loadMoiveDetail = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
      const response = await axios.get(url);
      setResult(response.data);
    };
    loadMoiveDetail();
  }, [id]);

  if (!result) {
    return;
  }

  return (
    <>
      <MovieInfoItem result={result} />
    </>
  );
};

export default MovieInfo;
