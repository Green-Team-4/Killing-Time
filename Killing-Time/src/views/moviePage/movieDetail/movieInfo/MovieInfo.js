import axios from "axios";
import { useEffect, useState } from "react";
import MovieInfoItem from "./MovieInfoItem";

const MovieInfo = ({ id }) => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    const loadMoiveDetail = async (e) => {
      const language = "ko-KR";
      const apiKey = "403cc00da7a7725917c9acd69484bde6";
      const baseUrl = "https://api.themoviedb.org/3/movie";
      const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
      // https://api.themoviedb.org/3/movie/436270?api_key=403cc00da7a7725917c9acd69484bde6&language=ko-KR

      const url_provider = `${baseUrl}/${id}/watch/providers?api_key=${apiKey}`;
      // https://api.themoviedb.org/3/movie/436270/watch/providers?api_key=403cc00da7a7725917c9acd69484bde6
      
      const today = new Date();
      const yesterday = new Date(today.setDate(today.getDate() - 1));
      const year = yesterday.getFullYear().toString();
      let month = (yesterday.getMonth() + 1);
        if (month === 13) month = 1;
        if (month < 10) month = "0" + month.toString();
        else month = month.toString();
      let date = yesterday.getDate();
        if (date < 10) date = "0" + date.toString();
        else date = date.toString();
      const standardDate = year + month + date;
      const koficApiKey = "90a160cca5ef62691042e238a946dd8e"
      const kofic_baseUrl = "https://kobis.or.kr/kobisopenapi/webservice/rest"
      const koficUrl = `${kofic_baseUrl}/boxoffice/searchDailyBoxOfficeList.json?key=${koficApiKey}&targetDt=${standardDate}`
      // https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=90a160cca5ef62691042e238a946dd8e&targetDt=20221221
      
      const data = {};
      const response = await axios.get(url);
      const resp_provider = await axios.get(url_provider);
      const resp_boxoffice = await axios.get(koficUrl);
      if (response.data.overview === "" || response.data.tagline === "") {
        const other_url = `${baseUrl}/${id}?api_key=${apiKey}`;
        const other_response = await axios.get(other_url);
        data.otherResult = other_response.data;
      }
      data.result = response.data;
      const title = data.result.title;
      const release_year = data.result.release_date.split("-");

      const kofic_listUrl = `${kofic_baseUrl}/movie/searchMovieList.json?key=${koficApiKey}&movieNm=${title}&openStartDt=${release_year[0]}`
      // http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=90a160cca5ef62691042e238a946dd8e&movieNm=블랙아담&openStartDt=2022
      const resp_searchByTitle = await axios.get(kofic_listUrl);
      if (resp_searchByTitle.data.movieListResult.movieList[0] !== undefined) {
        const movieCd = resp_searchByTitle.data.movieListResult.movieList[0].movieCd;
        const kofic_infoUrl = `${kofic_baseUrl}/movie/searchMovieInfo.json?key=${koficApiKey}&movieCd=${movieCd}`
        // http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=90a160cca5ef62691042e238a946dd8e&movieCd=20226886
        const resp_searchByCode = await axios.get(kofic_infoUrl);
        data.movieInfo = resp_searchByCode.data.movieInfoResult.movieInfo;
      }
      
      data.provider = resp_provider.data.results.KR;
      data.dailyBoxOfficeList = resp_boxoffice.data.boxOfficeResult.dailyBoxOfficeList;
      setAllData(data);
    };
    loadMoiveDetail();
  }, []);

  if (!allData) {
    return;
  }

  return (
    <>
      <MovieInfoItem result={allData.result} provider={allData.provider} otherResult={allData.otherResult} dailyBoxOfficeList={allData.dailyBoxOfficeList} movieInfo={allData.movieInfo} />
    </>
  );
};

export default MovieInfo;
