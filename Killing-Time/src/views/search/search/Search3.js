import React, { useState } from 'react';
import axios from 'axios';
const { CCol, CCard, CCardHeader, CCardBody, CTable, CTableRow, CTableHead, CTableHeaderCell, CTableBody, CTableDataCell } = require("@coreui/react");

const Search = (props) => {

  const [search, setSearch] = useState(null);

    const clickHandler = async (e) => {

      const category = 'movie';
      const language = 'ko';
      const page = 1;
      const query = 'black';
      const apiKey = 'e937a96ff64a1a83e17dac4c4abc7d43';
      const url = `https://api.themoviedb.org/3/search/${category}?api_key=${apiKey}&language=${language}&page=${page}&query=${query}`;
      const response = await axios.get(url);
      console.log(response.data);
      setSearch(response.data);

      
    }
    

    return(
      <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>검색 결과</strong>&nbsp;<button onClick={ clickHandler }>클릭</button>
        </CCardHeader>
        <CCardBody>           
            <CTable>
              <CTableHead>
              </CTableHead>
              <CTableBody style={{paddingTop:0}}>

                    { 
                    search ? 
                    //JSON.stringify(search) 
                    search.results.map((result, idx) => {
                      const imgLink = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${result.poster_path}`;

                      return (
                        <CTableRow key={idx}>
                          <CTableHeaderCell><img src={imgLink} alt={result.title}/></CTableHeaderCell>
                          <CTableHeaderCell>{result.title}</CTableHeaderCell>
                          &nbsp;
                          <CTableDataCell style={{width:100}}>{result.release_date}</CTableDataCell>
                          &nbsp;
                          <CTableDataCell>{result.overview}</CTableDataCell>
                          <CTableDataCell>{result.name}</CTableDataCell>
                        </CTableRow>
                      
                      )
                    })
                    : 
                    "영화 목록" }
                    

              </CTableBody>
            </CTable>
      </CCardBody>
      </CCard>
    </CCol>
  );
}

export default Search;
