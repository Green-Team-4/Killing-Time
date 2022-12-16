import React from 'react';
import { Link } from 'react-router-dom';

 const IMG_API = "https://image.tmdb.org/t/p/w1280";

//가져올 목록
const Movie = ({id, title, poster_path, release_date, vote_average }) => (
    <div className="movie">
        <p className='moviee'>
                <Link to="/moviePage/movieDetail" state={{ id: id }}>  
                        <div style={{width:240}}>
                        <img style={{ width:220, height: 330, textAlign:'center',borderRadius:20}}
                        src={
                            poster_path 
                            ? IMG_API + poster_path
                            // 영화 포스터 깨질경우 아래 이미지로 대처
                            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                            }
                            alt={title} />
                        </div>
                </Link>            
                <div style={{fontSize:15, color:'black'}} className="movie-info">
                &nbsp;
                    <Link style={{fontSize:20, textDecoration:'none', color:'black'}} to="/moviePage/movieDetail" state={{ id: id }}>
                        <h5 style={{fontWeight:'bold'}}>{title}</h5>
                    </Link>
                    <br />
                    </div>
                    <div style={{display:'inline-block'}}>
                        <span>
                        개봉일 :  {release_date}
                        <br />
                        평점 :  {vote_average}
                        </span>
                    </div>
                <br />
            <br />
        </p>
    </div>
);

export default Movie;