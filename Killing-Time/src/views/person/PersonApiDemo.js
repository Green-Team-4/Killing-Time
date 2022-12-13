import axios from 'axios';
import { useEffect, useState } from 'react';

const PersonApiDemo = (props) => {

    const [persons, setPersons] = useState([]);
    
    useEffect( () => {
        const loadPersons = async (e) => {
            const person_id = "976";
            const apiKey = "52b3ba71c5a67f1429c8e2d3877f3eb4";
            const url = `https://api.themoviedb.org/3/person/${person_id}?api_key=${apiKey}`;
            const response = await axios.get(url);
            console.log(response);
            setPersons(response.data);
        }
        loadPersons();
    },[]
    );
    return (
        <div>
            {
            persons ? 
            persons.map(person => (
                <span>{person.id}, {person.name}, {person.popularity}</span>
            )) 
            : "로드 실패"
            }
        </div>
    );             
};

export default PersonApiDemo;