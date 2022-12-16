
const DramaDetailItem = ({ result }) => {
    
    const { id, poster_path, name, first_air_date, vote_average} = result;
    
    
  
    return (
        <div>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="drama thumbnail" title={id} /><br />
        </div>
    );

};

export default DramaDetailItem;
