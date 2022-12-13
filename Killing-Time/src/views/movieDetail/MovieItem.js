import styled from 'styled-components';

// .css
// .scss ( or .sass )
// css-in-js : styled-components

const MoiveItemBlock = styled.div`
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
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const MovieItem = ({ result }) => {

    const { id, poster_path, title, overview, } = result;
    const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${ poster_path }`;
    const detail_url = `#/movieDetails?id=${ id }`;

    return (
        <>
            <div>
                <a href={ detail_url }>
                    <img src={ img_url } alt="movie thumbnail" />
                </a>
            </div>
            <div>
                <h2>
                    <a href={ id }>{ title }</a>
                </h2>
                <p>{ overview }</p>
            </div>
        </>
    );

};

export default MovieItem;
