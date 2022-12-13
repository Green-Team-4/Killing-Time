import React, { useState } from 'react'
import axios from 'axios';

const Search = (props) => {

  const [search, setSearch] = useState(null);

  const clickHandler = async (e) => {

    const language = 'ko';
    const query = 'name';
    const apiKey = 'e937a96ff64a1a83e17dac4c4abc7d43';
    const url = `https://api.themoviedb.org/search?language=${language}&query=${query}&api_key=${apiKey}`;
    const response = await axios.get(url);
    setSearch(response.data);
  };

  return (
      <>
        <button onClick={ clickHandler }>영화 가져오기</button>
        <hr />
        <div>
             { search ? JSON.stringify(search) : "클릭" }
        </div>
      </>
  )
}

export default Search;
