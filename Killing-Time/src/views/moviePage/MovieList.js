import axios from "axios";
import { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";

const MovieList = (props) => {
  const [results, setResults] = useState(null);

  // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
  useEffect(() => {
    const loadMoiveList = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      const url = `${baseUrl}/popular?api_key=${apiKey}&language=${language}&page=1`;
      // https://api.themoviedb.org/3/movie/popular?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR&page=1
      const response = await axios.get(url);
      setResults(response.data.results);
    };
    loadMoiveList();
  }, []);

  if (!results) {
    return;
  }

  return (
    <>
      {results.map((result) => {
        return <MovieListItem key={result.id} result={result} />
      })}
    </>
  );
};

export default MovieList;
