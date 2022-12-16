import { CCard, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Drama from './Drama';
import Movie from './Movie';


const SearchBlock = styled.div`

`;
// const category = 'movie';
// const language = 'ko';
// const page = 1;
// const query = 'black';
// const apiKey = 'e937a96ff64a1a83e17dac4c4abc7d43';
const URL1 = "https://api.themoviedb.org/3/discover/movie?&language=ko-KR&api_key=e937a96ff64a1a83e17dac4c4abc7d43&page=";
const URL2 = "https://api.themoviedb.org/3/discover/tv?&language=ko-KR&api_key=e937a96ff64a1a83e17dac4c4abc7d43&page=";
const URL3 = "https://api.themoviedb.org/3/search/movie?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=&query=";
const URL4 = "https://api.themoviedb.org/3/search/tv?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=&query=";

function Search() {

    const [contents, setContents] = useState([]);
    const [tvContents, setTvContents] = useState([]);
    const [search, setSearch] = useState("");
    const [movieTitle, setMovieTitle] = useState("인기 영화 TOP 20");
    const [tvTitle, setTvTitle] = useState("인기 TV TOP 20");

    useEffect( () => {
        getContents(URL1, "movie");
        getContents(URL2, "drama");
    },[]);

    const getContents = (API, type) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (type === 'movie') {
                    setContents(data.results);
                } else {
                    setTvContents(data.results);
                }
            });
    }
    

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if (!search || search === " " || search === "  "|| search === "   ") {
            alert('검색어를 입력해주세요.');
            return Search;
        }

        if (search) {
            getContents(URL3 + search, 'movie');
            getContents(URL4 + search, 'drama');
            
            setSearch("");
        }
        
        setMovieTitle(`"${search}" 영화 검색 결과`);
        setTvTitle(`"${search}" TV 프로그램 검색 결과`);
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <SearchBlock style={{paddingLeft:20, backgroundColor:'#F8F8FF', width:1220}}>
            <header>
                <br />
                <div className='logo'>
                    <h1 style={{fontWeight:'bold'}} className='search'>영화 & TV 검색</h1>
                </div>
                <br />
                <form onSubmit={handleOnSubmit}>
                    <div className='msearch'>
                        <input
                            style={{fontWeight:'bold',
                                    width:500,
                                    height:50, 
                                    paddingLeft:30,
                                    borderRadius:20, 
                                    backgroundColor:'#E6E6FA'
                                    }} 
                            className='search'
                            type="text"
                            placeholder='검색어를 입력하세요.'
                            value={search}
                            onChange={handleOnChange}
                        />
                    </div>
                </form>
            </header>
            &nbsp;<hr />&nbsp;
            <h2 style={{fontWeight:'bold'}}>{movieTitle}</h2>
            &nbsp;
            <div style={{width: "300px",
                        display: "grid",
                        gridTemplateRows: "1fr ",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                        }} className='content-container'>
                {
                    contents.length > 0 && contents.map((contents) =>
                        < Movie key={contents.id} {...contents}/>)
                }
            </div>
            &nbsp;<hr />&nbsp;
            <h2 style={{fontWeight:'bold'}}>{tvTitle}</h2>
            &nbsp;
            <div style={{width: "300px",
                        display: "grid",

                        gridTemplateRows: "1fr ",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                        }} className='content-container2'>
                {
                    tvContents.length > 0 && tvContents.map((tvContents) => 
                        < Drama key={tvContents.id} {...tvContents}/>)
                }
            </div>
            </SearchBlock>
    );
}

export default Search;