import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import PersonDetailCastItem from "./PersonDetailCastItem";

const CastListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    margin : 0;
    margin-top: 2rem;
    
`;

const PersonDetailCast = ({id}) => {
    console.log('id: ', id);
    const [castResults, setCastResults] = useState(null);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect(() => {
        const loadCastList = async (e) => {
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/${ id }/movie_credits?api_key=${ apiKey }`;
            const response = await axios.get(url)
            console.log('response.data:', response.data);
            setCastResults(response.data.cast);
            // debugger;
        }
        loadCastList();
    }, [id] );

    console.log('castResults:', castResults);
    if (!castResults) {
        return;
    }

    return (
        <CastListBlock>
            <br/><br/>
            <h2>Movie Credits</h2>
            <br/>
            {
                castResults.map( (castResult, idx) => {
                    return (<PersonDetailCastItem key={ castResult.id } castResult={ castResult } />);
                    
                })
            }
        </CastListBlock>
    );
};

export default PersonDetailCast;













