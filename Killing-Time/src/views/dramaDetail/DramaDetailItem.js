
const DramaDetailItem = ({ result }) => {
    
    const { id, poster_path, name, first_air_date, vote_average} = result;
    const img_url = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${ poster_path }`;
    
  
    return (
        <div>
            <img src={ img_url } alt="drama thumbnail" title={id} /><br />
        </div>
    );

};

export default DramaDetailItem;
