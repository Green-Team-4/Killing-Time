import { useEffect, useState } from "react";
import DramaDetailItem from "./DramaDetailItem";
import axios from "axios";

const DramaDetailList = ({id}) => {

    const [allData, setAllData] = useState(null);

    useEffect(() => {
        const loadDramaDetail = async (e) => {
            const language = 'ko-KR';
            const apiKey = "da88cf78c356139f9420b764c0d77208";
            const baseUrl = "https://api.themoviedb.org/3/tv";
            const url = `${baseUrl}/${id}?api_key=${apiKey}&language=${language}`;
            const url_provider = `${baseUrl}/${id}/watch/providers?api_key=${apiKey}`;
            // https://api.themoviedb.org/3/tv/119051/watch/providers?api_key=da88cf78c356139f9420b764c0d77208
            const response = await axios.get(url)
            const resp_provider = await axios.get(url_provider);
            //console.log(response.data);

            const data = {};
            data.result = response.data;
            data.provider = resp_provider.data.results.KR;
            setAllData(data);
        } 
        loadDramaDetail();
    }, [id] );

    if (!allData) {
        return;
    }

    return (
       <div>
            <DramaDetailItem result={ allData.result } provider={ allData.provider } 
            genres1={ allData.result.genres.map((genre) =>{ return (genre.name) } )}
            creators={ allData.result.created_by.map((created) =>{ return (created.name) } )} />
       </div>
        
    );

};

export default DramaDetailList;
