import axios from "axios";
import { useEffect, useState } from "react";

const PersonDetailInfo = ({id}) => {
    //console.log('id: ', id);

    const [name, setName] = useState(null);
    const [profile_path, setProfile_path] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [biography, setBiography] = useState(null);    

    useEffect( () => {
        const loadPersonList = async (e) => {
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = 
            `https://api.themoviedb.org/3/person/${ id }?api_key=${ apiKey }`;
            const response = await axios.get(url)
            console.log(response.data)
            setName(response.data.name);
            setProfile_path(response.data.profile_path);
            setBirthday(response.data.birthday);
            setBiography(response.data.biography);
        }
        loadPersonList();
    }, [id] );
    const img_url =`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ profile_path }`;

    return (
        <div>
            {
                profile_path != null
                ?
                <img src={img_url} alt={name} />
                :
                <img src="https://via.placeholder.com/300x450" alt={name} />
            }
        <br/><br/>
        <h2>{name}</h2>
        <h7>BirthDay : {birthday}</h7>
        <br/><br/>
        <span>{biography}</span>
        </div>
    );
};

export default PersonDetailInfo;
