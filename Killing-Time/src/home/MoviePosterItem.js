

const MoviePosterItem = ({moviePoster}) => {


    const imgUrl = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${moviePoster}`;

    return (
        <img src={imgUrl} alt="" />
    );
};

export default MoviePosterItem;