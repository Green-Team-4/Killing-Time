import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PersonDetailCastItem from "./PersonDetailCastItem";

const Button = styled.button`
  border: none;
  margin: 0;
  background-color: transparent;
  color: Black;
  font-size: 1rem;

  &:hover {
    color: Gray;
    cursor: pointer;
  }

  &[disabled] {
    font-weight: bold;
    color: Black;
    cursor: revert;
    transform: revert;
  }
`;

const PersonDetailCast = ({id}) => {
    // console.log('id: ', id);
    const [movieCastResults, setMovieCastResults] = useState(null);
    const [tvCastResults, setTvCastResults] = useState(null);
    const [castPage, setCastPage] = useState(null);

    const [loadCount, setLoadCount] = useState(10);
    const [movieListCount, setMovieListCount] = useState(0);
    const [tvListCount, setTvListCount] = useState(0)
    
    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect(() => {
        const loadCastList = async (e) => {
            const language = "ko-KR";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const MovieUrl = 
            `https://api.themoviedb.org/3/person/${ id }/movie_credits?api_key=${ apiKey }&language=${language}`;
            const responseMovie = await axios.get(MovieUrl)
            const TvUrl =
            `https://api.themoviedb.org/3/person/${ id }/tv_credits?api_key=${ apiKey }&language=${language}`;
            const responseTv = await axios.get(TvUrl)
            const MovieCreditUrl = 
            `https://api.themoviedb.org/3/person/${ id }/movie_credits?api_key=${ apiKey }`;
            const TvCreditUrl =
            `https://api.themoviedb.org/3/person/${ id }/tv_credits?api_key=${ apiKey }`;
            const responseMC = await axios.get(MovieCreditUrl);
            const responseTC = await axios.get(TvCreditUrl);
            setMovieListCount(responseMC.data.cast.length);
            setTvListCount(responseTC.data.cast.length);

            // console.log('responseMovie.data:', responseMovie.data);
            // console.log('responseTv.data:', responseMovie.data);
            setMovieCastResults(responseMovie.data.cast);
            setTvCastResults(responseTv.data.cast);
            setCastPage("movie");
        }
        loadCastList();
    }, [id] );

    // console.log('movieListCount: ', movieListCount);
    // console.log('tvListCount: ', tvListCount);
    // console.log('loadCount: ', loadCount);

    if (!movieCastResults) {
        return;
    } else if (!tvCastResults) {
        return;
    }

    return (
        <CRow>
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardBody>
                    <span style={{
                        margin:"10px",
                        marginRight:"20px",
                        fontWeight:"bold", 
                        fontSize:"24px"
                    }}>출연작</span>
                    <Button
                        onClick={() => {setCastPage("movie"); setLoadCount(10);}} disabled={castPage === "movie"}
                    >영화</Button>
                    <span style={{
                        margin:"10px"
                    }}>|</span>
                    <Button
                        onClick={() => {setCastPage("tv"); setLoadCount(10);}} disabled={castPage === "tv"}
                    >TV시리즈</Button>
                    <hr/><br/>
                    {
                        castPage === "movie"
                        ?
                        movieCastResults.map( (movieCastResult, idx) => {
                            if (idx < loadCount) {
                                return (<PersonDetailCastItem key={ idx } castResult={ movieCastResult } MovieOrTv="movie" />);
                            } else {
                                return "";
                            }
                        })
                        
                        :
                        tvCastResults.map( (tvCastResult, idx) => {
                            if (idx < loadCount) {
                                return (<PersonDetailCastItem key={ idx } castResult={ tvCastResult } MovieOrTv="tv"/>);
                            } else {
                                return "";
                            }
                        })
                    }
                    <div style={{textAlign:"center", marginBottom:"50px"}}>
                    {

                    }
                    {
                        castPage === "movie"
                        ?
                        (
                            movieListCount > loadCount
                            ?
                            <Button id="allview" onClick={() => 
                                    setLoadCount(loadCount+10)
                                }>더 보기
                            </Button>
                            :
                            <></>
                        )
                        :
                        (
                            tvListCount > loadCount
                            ?
                            <Button id="allview" onClick={() => 
                                setLoadCount(loadCount+10)
                            }>더 보기
                            </Button>
                            :
                            <></>
                        )
                    }
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    );
};

export default PersonDetailCast;













