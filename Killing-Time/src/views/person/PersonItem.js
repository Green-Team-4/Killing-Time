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
        width:225px;
        height:225px:
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

const PersonItem = ({ result }) => {

    const { id, profile_path, name, } = result;
    const img_url =`https://www.themoviedb.org/t/p/w235_and_h235_face${ profile_path }`;
    //console.log(profile_path);

    //console.log(name);
    //console.log(name.length);
    const nameLength = name.length;

    return (
        <PersonItemBlock>
            <div>
                <Link to="/personDetail" state={{ id: id }}>
                    {
                        profile_path != null
                        ?
                        <img src={img_url} alt={name} />
                        :
                        <img src="https://via.placeholder.com/235" alt={name} />
                    }
                </Link><br/>
                <h5>
                    <Link to="/personDetail" state={{ id: id }}>
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
            </div>
        </PersonItemBlock>
    );

};

export default PersonItem;
