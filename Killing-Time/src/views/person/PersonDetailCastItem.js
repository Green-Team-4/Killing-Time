import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PersonDetailCastItemBlock = styled.div`
    display: inline-flex;
    margin: 0 auto;
    margin-left: 20px;
    margin-bottom: 30px;
    img {
        width:225px;
        border-radius:2.5%;
    }
    a {
        color: black;
        text-decoration-line : none;
    }
    a:hover {
        color: gray;
    }
    div.poster {
        margin-bottom: 10px;
    }
    div.description {
        width:225px;
        height:30px;
        padding-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size: 20px;
    }
`;

const PersonDetailCastItem = ({ castResult, MovieOrTv }) => {

    const { id, poster_path, title, name } = castResult;
    const img_url =`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ poster_path }`;
    // console.log(poster_path);
    // console.log('MovieOrTv: ', MovieOrTv);

    if (MovieOrTv === "movie") {
        return (
            <PersonDetailCastItemBlock>
                <div>
                    <div className="poster">
                        <Link to="/moviePage/movieDetail" state={{ id: id }}>
                            {
                                poster_path != null
                                ?
                                <img src={img_url} alt={title} />
                                :
                                <img src="https://via.placeholder.com/300x450?text=Unknown+Poster" alt={title} />
                            }
                        </Link><br/>
                    </div>
                    <div className="description">
                        <Link to="/moviePage/movieDetail" state={{ id: id }}>
                            { title }
                        </Link>
                    </div>
                </div>
            </PersonDetailCastItemBlock>
        );
    } else if (MovieOrTv === "tv") {
        return (
            <PersonDetailCastItemBlock>
                <div>
                    <div className="poster">
                        <Link to="/dramaMain/dramaDetails" state={{ id: id }}>
                            {
                                poster_path != null
                                ?
                                <img src={img_url} alt={name} />
                                :
                                <img src="https://via.placeholder.com/300x450?text=Unknown+Poster" alt={name} />
                            }
                        </Link><br/>
                    </div>
                    <div className="description">
                        <Link to="/dramaMain/dramaDetails" state={{ id: id }}>
                            { name }
                        </Link>
                    </div>
                </div>
            </PersonDetailCastItemBlock>
        );
    } else {
        return;
    }
    

};

export default PersonDetailCastItem;
