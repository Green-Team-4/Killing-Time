import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const PersonDetail = (props) => {

    const location = useLocation();
    let getParameter = (key) => {
        return new URLSearchParams(location.search).get(key);
    };
        
    const id = getParameter("id");
    console.log('getParameter 함수: ', id);

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
        
        <img src={img_url}/>
        <br/><br/>
        <h2>{name}</h2>
        <h7>BirthDay : {birthday}</h7>
        <br/><br/>
        <span>{biography}</span>
        
        </div>
    );
};

export default PersonDetail;
