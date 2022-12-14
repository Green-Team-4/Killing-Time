import React, { useEffect, useState } from 'react';
import Movie from './Movie';

// const category = 'movie';
// const language = 'ko';
// const page = 1;
// const query = 'black';
// const apiKey = 'e937a96ff64a1a83e17dac4c4abc7d43';
const URL1 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=";
const URL2 = "https://api.themoviedb.org/3/search/movie?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&query=";

function SearchContents() {

    const [contents, setContents] = useState([]);
    const [search, setSearch] = useState("");

    useEffect( () => {
        getContents(URL1);
    },[]);

    const getContents = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setContents(data.results);
            });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (search) {
            getContents(URL2 + search);

            setSearch("");
        }
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <header>
                <div className='logo'>
                    <h1 className='search'>Contents<span>View</span></h1>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className='msearch'>
                        <input 
                            className='search'
                            type="text"
                            placeholder='검색어를 입력하세요'
                            value={search}
                            onChange={handleOnChange}
                        />
                    </div>
                </form>
            </header>

            <div className='content-container'>
                {contents.length > 0 &&
                    contents.map((contents) => < Movie key={contents.id} {...contents}/>)}
            </div>
        </>
    );
}

export default SearchContents;