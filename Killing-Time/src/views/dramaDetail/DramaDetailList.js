import { useEffect, useState } from "react";
import DramaDetailItem from "./DramaDetailItem";
import axios from "axios";

const DramaDetailList = ({id}) => {

    const [result, setResult] = useState(null);
    useEffect(() => {
        const loadDramaDetail = async (e) => {
            const language = 'ko-KR';
            const apiKey = "da88cf78c356139f9420b764c0d77208";
            const baseUrl = "https://api.themoviedb.org/3/tv";
            const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
                       
            //https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
            //https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US
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
            <DramaDetailItem result={ result } />
       </div>
        
    );

};

export default DramaDetailList;
