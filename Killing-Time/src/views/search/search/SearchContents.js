import React, { useEffect, useState } from 'react';
import Drama from './Drama';
import Movie from './Movie';

const URL3 = "https://api.themoviedb.org/3/search/movie?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=&query=";
const URL4 = "https://api.themoviedb.org/3/search/tv?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=&query=";

function SearchContents() {

    

    const [contents, setContents] = useState([]);
    const [tvContents, setTvContents] = useState([]);
    const [search, setSearch] = useState("");
    
    

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
        window.location.href = "#/SearchContents";
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
            <h2>영화</h2>
            <h5>검색 결과입니다.</h5>
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
            <hr />&nbsp;
            <h2>드라마</h2>
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

export default SearchContents;