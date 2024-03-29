import { useEffect, useState } from "react";
import DramaItem from "./DramaItem";
import axios from "axios";
import Pagination from "./DramaPage";
import { CCol } from '@coreui/react';

const DramaList = (props) => {

    const [results, setResults] = useState(null);
    const [page, setPage] = useState(null);
    const [total_pages, setTotal_pages] = useState(null);

    useEffect( () => {
        const loadDramaList = async (e) => {
            const language = 'ko-KR';
            const apiKey = "da88cf78c356139f9420b764c0d77208";
            const baseUrl = 'https://api.themoviedb.org/3/tv';
            const url = `${ baseUrl }/top_rated?api_key=${ apiKey }&language=${ language }&page=${ page }`;
            //https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
            const response = await axios.get(url)
            setResults(response.data.results);
            setPage(response.data.page);
            setTotal_pages(response.data.total_pages);
        }
        loadDramaList();
    }, [page]);

    if (!results) {
        return;
    }

    return (
        <>
        <CCol style={{ backgroundColor: "white", width: "1120px", margin:"auto"}}  >
            <div style={{
                margin: "10px",
                padding: "20px",
                width: "1100px",
                display: "grid",
                gridTemplateRows: "1fr ",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                backgroundColor: "white",
            }}>
                {   
                    results.map( (result) => {
                        return (<DramaItem key={ result.id } result={ result } />);
                    })
                }
            </div>
            <div> 
                <Pagination 
                setPage={setPage}
                page={page}
                total={total_pages} 
                />
            </div>
            <br />
            </CCol>    
        </>
    );
};

export default DramaList;
