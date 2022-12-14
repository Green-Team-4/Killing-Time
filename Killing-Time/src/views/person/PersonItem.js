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
        width:235px;
        height:235px:
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
    const img_url =`https://www.themoviedb.org/t/p/w235_and_h235_face${ profile_path }`;
    const detail_url = `person?id=${ id }`;
    console.log(profile_path);
    return (
        <PersonItemBlock>
            <div>
                <a href={ detail_url }>
                    {
                        profile_path != null
                        ?
                        <img src={img_url} alt={name} />
                        :
                        <img src="https://via.placeholder.com/235" alt={name} />
                    }
                </a><br/>
                <h3>
                    <a href={ detail_url }>{ name }</a>
                </h3>
            </div>
        </PersonItemBlock>
    );

};

export default PersonItem;
