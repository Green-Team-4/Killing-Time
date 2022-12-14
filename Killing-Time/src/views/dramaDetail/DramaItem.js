import styled from 'styled-components';

// .css
// .scss ( or .sass )
// css-in-js : styled-components

const DramaItemBlock = styled.div`
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

const DramaItem = ({ result }) => {

    const { id, poster_path, name, first_air_date, vote_average} = result;
    const img_url = `https://www.themoviedb.org/t/p/w220_and_h330_face${ poster_path }`;
    const detail_url = `#/dramaDetails?id=${ id }`;
  
    return (
        <div>
            <a href={ detail_url }>
                <img src={ img_url } style={{padding:3}} alt="drama thumbnail" /><br />
            </a>
                <h3>{ name }<br /></h3>
                출시일 : { first_air_date }<br />
                회원 점수 : { vote_average }
        
           
            {/* <div>
                 <a href={ detail_url }>
                    <img src={ img_url } alt="drama thumbnail" />
                </a>
            </div>
            <div>
                <h2>
                    <a href={ id }>{ name }</a> <br />
                    <a href={ id }>{ origin_country }</a> <br />
                    <a href={ id }>{ vote_count }</a>

                </h2>
                <p>{ overview }</p>
            </div> */}
        </div>
    );

};

export default DramaItem;
