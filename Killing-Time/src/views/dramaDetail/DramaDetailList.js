import { useEffect, useState } from "react";
import DramaDetailItem from "./DramaDetailItem";
import axios from "axios";

const DramaDetailList = ({id}) => {

    const [result, setResult] = useState(null);
    const [provider, setProvider] = useState(null);
    useEffect(() => {
        const loadDramaDetail = async (e) => {
            const language = 'ko-KR';
            const apiKey = "da88cf78c356139f9420b764c0d77208";
            const baseUrl = "https://api.themoviedb.org/3/tv";
            const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
            const response = await axios.get(url)
            console.log(response.data);
            setResult(response.data);
        }
        loadDramaDetail();
    }, [id] );

    if (!result) {
        return;
    }

    return (
       <div>
            <DramaDetailItem result={ result } provider={provider} />
       </div>
        
    );

};

export default DramaDetailList;
