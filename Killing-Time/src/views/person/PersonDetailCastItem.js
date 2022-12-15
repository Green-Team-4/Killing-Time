import { Link } from 'react-router-dom';
import styled from 'styled-components';

// .css
// .scss ( or .sass )
// css-in-js : styled-components

const PersonDetailCastItemBlock = styled.div`
    display: inline-flex;
    margin: 0 auto;
    margin-left: 20px;
    margin-bottom: 30px;
    img {
        width:200px;
        height:200px:
    }

    h5 {
        text-align: center;
    }
    a {
        color: black;
        text-decoration-line : none;
    }
    a:hover {
        text-decoration-line : underline;
    }
`;

const PersonDetailCastItem = ({ castResult }) => {

    const { id, poster_path, title, } = castResult;
    const img_url =`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ poster_path }`;
    console.log(poster_path);

    
    const nameLength = title.length;

    return (
        <PersonDetailCastItemBlock>
            <div>
                <Link to="/MovieDetail" state={{ id: id }}>
                    {
                        poster_path != null
                        ?
                        <img src={img_url} alt={title} />
                        :
                        <img src="https://via.placeholder.com/300x450" alt={title} />
                    }
                </Link><br/>
                <h5>
                    <Link to="/MovieDetail" state={{ id: id }}>
                        { title.slice(0, 18)}
                    {
                        nameLength < 18
                        ?
                        <></>
                        :
                        <>...</>
                    }
                    </Link>
                </h5>
            </div>
        </PersonDetailCastItemBlock>
    );

};

export default PersonDetailCastItem;
