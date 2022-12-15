import React, { useEffect, useState } from 'react';
import Drama from './Drama';
import Movie from './Movie';

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
    const [tvTitle, setTvTitle] = useState("인기 드라마 TOP 20");

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

        if (search) {
            getContents(URL3 + search, 'movie');
            getContents(URL4 + search, 'drama');
            
            setSearch("");
        }
        setMovieTitle(`"${search}" 영화 검색 결과`);
        setTvTitle(`"${search}" 드라마 검색 결과`);
        
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <header>
                <div className='logo'>
                    <h1 className='search'>Contents View</h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className='msearch'>
                        <input 
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
            <h2>{movieTitle}</h2>
            &nbsp;
            <div style={{width: "300px",
                        display: "grid",
                        gridTemplateRows: "1fr ",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr"
                        }} className='content-container'>
                {
                    contents.length > 0 && contents.map((contents) =>
                        < Movie key={contents.id} {...contents}/>)
                }
            </div>
            &nbsp;<hr />&nbsp;
            <h2>{tvTitle}</h2>
            &nbsp;
            <div style={{width: "300px",
                        display: "grid",
                        gridTemplateRows: "1fr ",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr"
                        }} className='content-container2'>
                {
                    tvContents.length > 0 && tvContents.map((tvContents) => 
                        < Drama key={tvContents.id} {...tvContents}/>)
                }
            </div>
        </>
    );
}

export default Search;