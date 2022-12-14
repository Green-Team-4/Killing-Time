import { useEffect, useState } from "react";
import PersonItem from "./PersonItem";
import styled from 'styled-components';
import axios from "axios";

const PersonListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const PersonList = (props) => {

    const [results, setResults] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {
        const loadPersonList = async (e) => {
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const baseUrl = 'https://api.themoviedb.org/3/person';
            const url = `${ baseUrl }/popular?api_key=${ apiKey }`;
            const response = await axios.get(url)
            console.log(response.data);
            setResults(response.data.results);
        }
        loadPersonList();
    }, [] );

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
        </PersonListBlock>
    );

};

export default PersonList;
