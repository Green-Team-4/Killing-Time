

const MoviePosterItem = ({MoviePoster}) => {


    const imgUrl = `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${MoviePoster}`;

    return (
        <img src={imgUrl} alt="" />
    );
};

export default MoviePosterItem;