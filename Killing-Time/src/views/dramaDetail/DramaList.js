import { useEffect, useState } from "react";
import DramaItem from "./DramaItem";
import styled from 'styled-components';
import axios from "axios";



const DramaList = (props) => {

    const [results, setResults] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {
        const loadDramaList = async (e) => {
            const language = 'ko-KR';
            const apiKey = "da88cf78c356139f9420b764c0d77208";
            const baseUrl = 'https://api.themoviedb.org/3/tv';
            const url = `${ baseUrl }/popular?api_key=${ apiKey }&language=${ language }&page=1`;
            //https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
            const response = await axios.get(url)
            setResults(response.data.results);
        }
        loadDramaList();
    }, [] );

    if (!results) {
        return;
    }

    return (
        <div
            style={{
                margin: "50px",
                padding: "30px",
                width: "1200px",
                display: "grid",
                gridTemplateRows: "1fr ",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                backgroundColor: "hotpink",
            }}
    >
        
            {   
                
                results.map( (result) => {
                    return (<DramaItem key={ result.url } result={ result } />);
                })
            }
        
        </div>
    );

};

export default DramaList;
