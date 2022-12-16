import moment from "moment/moment";

const DramaDetailItem = ({ result }) => {
    
    const { id, poster_path, name,first_air_date, original_name, overview} = result;
    
    
  
    return (
        <>
        
        <div>
            <img style={{ padding:20, borderRadius: 40, opacity:'1'}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="drama thumbnail" title={id} /><br />
            <div style={{ height:500, width:700, position: 'absolute', top:300, left:700 }}>
                <h1>{name}({original_name})</h1><h3>개봉일: {moment(first_air_date).format('YYYY-MM')}</h3>
                {/* {moment(movie.pubDate).format('YYYY-MM-DD')} */}
                <h4>개요</h4>
                <h5>{overview}</h5>
                <h5>{}</h5>
                <h5>{}</h5>
                
            </div>
        </div>
        <div style={{ position:'absolute', top:120, borderRadius: 20, height: 600, width:1200, backgroundImage:`url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path})`,opacity:'0.3', backgroundSize:`cover` }}>
            
        </div>
        
        
        
        
        </>
    );


};

export default DramaDetailItem;
