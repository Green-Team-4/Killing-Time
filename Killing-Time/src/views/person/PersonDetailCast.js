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
    const [visible, setVisible] = useState(1);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect(() => {
        const loadCastList = async (e) => {
            const language = "ko-KR";
            const country = "KR";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const MovieUrl = 
            `https://api.themoviedb.org/3/person/${ id }/movie_credits?api_key=${ apiKey }&language=${language}&region=${country}`;
            const responseMovie = await axios.get(MovieUrl)
            const TvUrl =
            `https://api.themoviedb.org/3/person/${ id }/tv_credits?api_key=${ apiKey }&language=${language}&region=${country}`;
            const responseTv = await axios.get(TvUrl)
            // console.log('responseMovie.data:', responseMovie.data);
            // console.log('responseTv.data:', responseMovie.data);
            setMovieCastResults(responseMovie.data.cast);
            setTvCastResults(responseTv.data.cast);
            setCastPage("movie");
            // debugger;
        }
        loadCastList();
    }, [id] );

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
                        onClick={() => {setCastPage("movie"); setLoadCount(10); setVisible(1);}} disabled={castPage === "movie"}
                    >영화</Button>
                    <span style={{
                        margin:"10px"
                    }}>|</span>
                    <Button
                        onClick={() => {setCastPage("tv"); setLoadCount(10); setVisible(1);}} disabled={castPage === "tv"}
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
                            return (<PersonDetailCastItem key={ idx } castResult={ tvCastResult } MovieOrTv="tv" />);
                            } else {
                                return "";
                            }
                        })
                    }
                    <div style={{textAlign:"center", marginBottom:"50px"}}>
                    {
                        visible === 1
                        ?
                        <Button id="allview" onClick={() => 
                            {
                                setLoadCount(65535);
                                setVisible(0);
                            }
                        }>전부 보기
                        </Button>
                        :
                        <></>
                    }
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    );
};

export default PersonDetailCast;













