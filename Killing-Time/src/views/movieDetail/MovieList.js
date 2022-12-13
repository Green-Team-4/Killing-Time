import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import styled from 'styled-components';
import axios from "axios";

const MovieListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const MovieList = (props) => {

    const [results, setResults] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {
        const loadMoiveList = async (e) => {
            const language = 'ko-KR';
            const apiKey = "403cc00da7a7725917c9acd69484bde6";
            const baseUrl = 'https://api.themoviedb.org/3/movie';
            const url = `${ baseUrl }/popular?api_key=${ apiKey }&language=${ language }&page=1`;
            const response = await axios.get(url)
            setResults(response.data.results);
        }
        loadMoiveList();
    }, [] );

    if (!results) {
        return;
    }

    return (
        <MovieListBlock>
            {
                results.map( (result) => {
                    return (<MovieItem key={ result.url } result={ result } />);
                })
            }
        </MovieListBlock>
    );

};

export default MovieList;
