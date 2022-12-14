import styled from 'styled-components';

// .css
// .scss ( or .sass )
// css-in-js : styled-components

const PersonItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    h3 {
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
    const img_url = `https://www.themoviedb.org/t/p/w235_and_h235_face${ profile_path }`;
    const detail_url = `#/person?id=${ id }`;
    return (
        <PersonItemBlock>
            <div>
                <a href={ detail_url }>
                    <img src={ img_url } alt="thumbnail" />
                </a>
                <br/>
                <h3>
                    <a href={ id }>{ name }</a>
                </h3>
            </div>
        </PersonItemBlock>
    );

};

export default PersonItem;
