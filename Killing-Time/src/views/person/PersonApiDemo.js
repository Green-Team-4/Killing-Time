import axios from 'axios';
import { useState } from 'react';

const PersonApiDemo = (props) => {

    const [person, setPerson] = useState(null);
    const clickHandler = async (e) => {
        const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
        const url = `https://api.themoviedb.org/3/movie/550?apiKey=${apiKey}`;
        const response = await axios.get(url);
        setPerson(response.data);
    };

    return (
        <div>
            <button onClick={ clickHandler }>Person 가져오기</button>
            <hr />
            <div>
                { person ? JSON.stringify(person) : "내용 없음" }
            </div>
        </div>
    );

};

export default PersonApiDemo;