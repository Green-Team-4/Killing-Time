import { cilSearch } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CCard, CCol, CNavItem, CNavLink, CRow, CTooltip } from '@coreui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Drama from './Drama';
import Movie from './Movie';
import People from './People';
import TabList from './TabList';



const SearchBlock = styled.div`

`;
// const category = 'movie';
// const language = 'ko';
// const page = 1;
// const query = 'black';
const apiKey = 'e937a96ff64a1a83e17dac4c4abc7d43';

const URL1 = "https://api.themoviedb.org/3/discover/movie?&language=ko-KR&api_key=e937a96ff64a1a83e17dac4c4abc7d43&page=";
const URL2 = "https://api.themoviedb.org/3/discover/tv?&language=ko-KR&api_key=e937a96ff64a1a83e17dac4c4abc7d43&page=";
const URL3 = "https://api.themoviedb.org/3/search/movie?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=&query=";
const URL4 = "https://api.themoviedb.org/3/search/tv?&api_key=e937a96ff64a1a83e17dac4c4abc7d43&language=ko-KR&page=&query=";
const URL5 = `https://api.themoviedb.org/3/search/person?&api_key=${apiKey}&language=ko-KR&page=&query=`;
const URL6 = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`;

function Search() {

    const [contents, setContents] = useState([]);
    const [tvContents, setTvContents] = useState([]);
    const [actorInfos, setActorInfos] = useState([]);
    const [search, setSearch] = useState("");
    const [movieTitle, setMovieTitle] = useState("인기 영화 TOP 20");
    const [tvTitle, setTvTitle] = useState("인기 TV TOP 20");
    const [actor, setActor] = useState("인기 배우 TOP 20");

    useEffect( () => {
        getContents(URL1, "movie");
        getContents(URL2, "drama");
        getContents(URL6, "actor");
    },[]);
   

    const getContents = (API, type) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (type === 'movie') {
                    setContents(data.results);                    
                } else if (type === 'drama') {
                    setTvContents(data.results);
                } else {
                    setActorInfos(data.results);
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
            getContents(URL5 + search, 'actor');
            
            setSearch("");
        }
        
        setMovieTitle(`"${search}" 영화 검색 결과`);
        setTvTitle(`"${search}" TV 프로그램 검색 결과`);
        setActor(`"${search}" 배우 검색 결과`);
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }
    
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        
        {
            tabTitle:(
                <span style={{paddingLeft:50}}>
                <CTooltip 
                    content="영화 정보를 확인하세요."
                    placement="bottom">
                    <CButton color='dark' style={{ fontSize: 18, 
                                                    height:50,
                                                    borderRadius:15,
                                                    width:150
                                                  }} className={activeIndex===0 ? "is-active" : ""} 
                                                    onClick={()=>tabClickHandler(0)}> 
                        영화 정보
                    </CButton>
                </CTooltip>
                &nbsp;&nbsp;&nbsp;
                </span>
            ),
            tabCont:(
                <div><h2 style={{fontWeight:'bold'}}>{movieTitle}</h2>            
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
                </div></div>
            )
        },
        {
            tabTitle:(
                <span>
                <CTooltip 
                    content="TV 시리즈 정보를 확인하세요."
                    placement="bottom">
                    <CButton color='dark' style={{ fontSize: 18,
                                                    borderRadius:15,
                                                    height:50, 
                                                    width:150
                                                  }} className={activeIndex===1 ? "is-active" : ""} 
                                                    onClick={()=>tabClickHandler(1)}> 
                        TV 정보
                    </CButton>
                </CTooltip>
                &nbsp;&nbsp;&nbsp;
                </span>
            ),
            tabCont:(
                <div>
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
            </div>
            )
        },
        {
            tabTitle:(
                <span>
                <CTooltip 
                    content="인물 정보를 확인하세요."
                    placement="bottom">
                    <CButton color='dark' style={{ fontSize: 18,
                                                    borderRadius:15, 
                                                    height:50, 
                                                    width:150
                                                  }} className={activeIndex===2 ? "is-active" : ""} 
                                                    onClick={()=>tabClickHandler(2)}> 
                        인물 정보
                    </CButton>
                </CTooltip>
                </span>
            ),
            tabCont:(
                <div> 
                <h2 style={{fontWeight:'bold'}}>{actor}</h2>
                &nbsp;
                <div style={{width: "300px",
                            display: "grid",
    
                            gridTemplateRows: "1fr ",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                            }} className='content-container2'>
                    {
                        actorInfos.length > 0 && actorInfos.map((actorInfos) => 
                            < People key={actorInfos.id} {...actorInfos}/>)
                    }
                </div></div>
            )
        }
    ];
    return (
        <CCol style={{margin: 'auto', paddingLeft:20, paddingRight:35}}>         
        <SearchBlock style={{paddingLeft:70, backgroundColor:'#F8F8FF', borderRadius:10}}>
            <header>
                <br />
                <div className='logo'>
                    <h1 style={{fontWeight:'bold'}} className='search'>
                        영화 & TV 검색
                    </h1>
                </div>
                <br /><br />
                <form onSubmit={handleOnSubmit}>
                    <div className='msearch'>
                        <label>
                        <CIcon style={{width:40, verticalAlign: 'middle'}} icon={cilSearch} customClassName="nav-icon" />
                        &nbsp;&nbsp;
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
                            placeholder='제목, 인물을 입력하세요.'
                            value={search}
                            onChange={handleOnChange}
                        />
                        </label>
                    </div>
                </form>
                <br />
            </header>
            <div className="tabs" style={{width:800}}>
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </div>                     
            &nbsp;<hr />&nbsp;
            <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
            </SearchBlock>
            </CCol>
    );
}

export default Search;