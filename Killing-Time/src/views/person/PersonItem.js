import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// .css
// .scss ( or .sass )
// css-in-js : styled-components

const PersonItemBlock = styled.div`
    display: inline-flex;
    margin: 0 auto;
    margin-left: 20px;
    margin-bottom: 30px;
    img {
        width:220px;
        height:220px:
    }
    h5 {
        text-align: left;
        padding-top: 5px;
        padding-left: 10px;
    }
    a {
        color: black;
        text-decoration-line : none;
    }
    a:hover {
        color: gray;
    }
    .peopleBox {
        background-color: GhostWhite;
        border: 1px solid LightGray;
        box-shadow:3px 3px 3px Gainsboro;
    }
    .MiniMovieCredit {
        width:220px;
        height:30px;
        padding-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const PersonItem = ({ result }) => {

    const { id, profile_path, name, } = result;
    const img_url =`https://www.themoviedb.org/t/p/w235_and_h235_face${ profile_path }`;
    const nameLength = name.length;
    const [casts, setCasts] = useState(null);
    // const [miniListEnd ,setMiniListEnd] = useState(0);

    // useEffect : mount(초기화), update(상태변화) 이벤트 처리기 등록
    useEffect( () => {
        const loadMiniList = async (e) => {
            const language = "ko-KR";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${ apiKey }&language=${language}`;
            const response = await axios.get(url)
            // console.log('response.data :', response.data);
            setCasts(response.data.cast);
            // setMiniListEnd(response.data.cast.length);
        }
        loadMiniList();
    }, [id] );
    // console.log('miniListEnd: ', miniListEnd);

    if(!casts) {
        return null;
    }
    return (
        <PersonItemBlock>
            <div className="peopleBox">
                <Link to="/personList/personDetail" state={{ id: id }}>
                    {
                        profile_path != null
                        ?
                        <img src={img_url} alt={name} />
                        :
                        <img src="https://via.placeholder.com/235?text=Unknown+Photo" alt={name} />
                    }
                </Link><br/>
                <h5>
                    <Link to="/personList/personDetail" state={{ id: id }}>
                        { name.slice(0, 20)}
                    {
                        nameLength < 20
                        ?
                        <></>
                        :
                        <>...</>
                    }
                    </Link>
                </h5>
                <div className="MiniMovieCredit">
                    <span style={{fontSize:12}}>
                    {
                        // miniResults
                        // ?
                        casts.map( (cast, idx) => {
                            if ( idx + 1 === casts.length ) {
                                return cast.title
                            } else {
                                return `${cast.title}, `; 
                            }
                            
                        })
                        // :
                        // <div></div>
                    }
                    </span>
                </div>
            </div>
        </PersonItemBlock>
    );

};

export default PersonItem;
