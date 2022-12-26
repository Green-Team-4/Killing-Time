import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import PersonItem from "./PersonItem";
import Pagination from "./PersonPage";
import SearchPagination from "./PersonSearchPage";

const PersonList = (props) => {

    const language = "ko-KR";
    const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";

    const [results, setResults] = useState(null);

    const [searchKeyword, setSearchKeyword] = useState(null);
    const [searchResults, setSearchResult] = useState(null);
    const [pageType, setPageType] = useState(null);
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(null);

    // useEffect( () => {
    //     console.log('props.page: ', page)
    //     if(props.page > 1 && props.page != null ) {
    //         return(
    //             setPage(props.page)
    //         );
    //     }
    // }, [props.page] )

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {

        if (searchKeyword === null | searchKeyword === "") {
            const loadPersonList = async (e) => {
                const url = 
                `https://api.themoviedb.org/3/person/popular?api_key=${ apiKey }&page=${page}&language=${language}`;
                const response = await axios.get(url);
                setResults(response.data.results);
                //console.log(response.data.results)
                setPage(response.data.page);
                setTotal_pages(response.data.total_pages);
                setPageType("popular");
                setSearchKeyword(null);
            }
            loadPersonList();
            
        } else {
            const searchPersonList = async (e) =>{
                const searchUrl = 
                `https://api.themoviedb.org/3/search/person?&api_key=${ apiKey }&page=${page}&language=${language}&query=${searchKeyword}`;
                const responseSearch = await axios.get(searchUrl);
                //console.log(responseSearch.data);
                setSearchResult(responseSearch.data.results);
                setPage(responseSearch.data.page);
                setPageType("search");
            }
            searchPersonList();
        }
    }, [page, searchKeyword, language, apiKey] );
    // console.log(results);
    // console.log(page);
    // console.log('search keyword: ', searchKeyword);

    if (!results) {
        return;
    }

    if(pageType === "popular") {
        return (
            <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardBody>
                        <span style={{
                            fontSize:"24px",
                            fontWeight:"bold", 
                            marginTop:"10px", 
                            marginLeft:"10px"
                        }}>인기 인물</span>
                        <div style={{
                             display:"inline-block",
                             marginLeft:"20px",
                             marginBottom:"10px"
                        }}>
                        <span style={{
                            fontSize:"20px",
                            marginRight:"24px"
                        }}>|</span>
                        <input type="text" id="pageInput" placeholder='이름 검색'
                        style={{width:"120px", height:"20px"}}
                        onChange={(event) => setSearchKeyword(event.target.value)}
                        >
                        </input>
                        </div>
                        <br/>
                        {
                            results.map( (result) => {
                                return (<PersonItem key={ result.id } result={ result } page={page}/>);
                            })
                        }
                        <Pagination
                            total={total_pages} 
                            page={page}
                            setPage={setPage}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
            </CRow>
        );
    } else if (pageType === "search") {
        return (
            <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardBody>
                        <span style={{
                            fontSize:"24px",
                            fontWeight:"bold", 
                            marginTop:"10px", 
                            marginLeft:"10px"
                        }}>인물 검색</span>
                        <div style={{
                             display:"inline-block",
                             marginLeft:"20px",
                             marginBottom:"10px"
                        }}>
                        <span style={{
                            fontSize:"20px",
                            marginRight:"24px"
                        }}>|</span>
                        <input type="text" id="pageInput" 
                        style={{width:"120px", height:"20px"}}
                        onChange={(event) => setSearchKeyword(event.target.value) | setPage(1)}
                        >
                        </input>
                        </div>
                        <br/>
                        {
                            searchResults != null
                            ?
                            searchResults.map( (searchResult) => {
                                return (<PersonItem key={ searchResult.id } result={ searchResult } page={ page }/>);
                            })
                            :
                            <></>
                        }
                        <SearchPagination
                            page={page}
                            setPage={setPage}
                        />
                        <br/>
                    </CCardBody>
                </CCard>
            </CCol>
            </CRow>
        );
    } else {
        return;
    }


    

};

export default PersonList;
