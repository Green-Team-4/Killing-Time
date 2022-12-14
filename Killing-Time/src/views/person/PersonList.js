import { useEffect, useState } from "react";
import PersonItem from "./PersonItem";
import styled from 'styled-components';
import axios from "axios";
import Pagination from "./PersonPage";

const PersonListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 1000px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    #pager{
        text-align:center;
    }
`;

const PersonList = (props) => {

    const [results, setResults] = useState(null);
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {
        const loadPersonList = async (e) => {
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/popular?api_key=${ apiKey }&page=${page}`;
            const response = await axios.get(url)
            //console.log(response.data);
            setResults(response.data.results);
            setPage(response.data.page);
            setTotal_pages(response.data.total_pages);
        }
        loadPersonList();
    }, [page] );
    //console.log(results);
    //console.log(page);

    if (!results) {
        return;
    }

    return (
        <PersonListBlock>
            {
                results.map( (result) => {
                    return (<PersonItem key={ result.url } result={ result } />);
                })
            }
            
            <Pagination 
                total={total_pages} 
                page={page}
                setPage={setPage}
            />


        </PersonListBlock>
    );

};

export default PersonList;
