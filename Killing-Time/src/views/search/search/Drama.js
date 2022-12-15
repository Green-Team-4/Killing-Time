import React from 'react';
import { Link } from 'react-router-dom';


const IMG_API = "https://image.tmdb.org/t/p/w1280";

// 평점별 색상주기 
const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

// 가져올 목록
const Drama = ({id, name, poster_path, first_air_date, vote_average }) => (
    <div className="drama">
        &nbsp;
        <p className='dramaa'>
        <img style={{ width:300, height: 300}}
            src={
                poster_path 
                ? IMG_API + poster_path
                // 영화 포스터 깨질경우 아래 이미지로 대처
                : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                } 
                alt={name} />
                <div className="movie-info">
                &nbsp;
                    <Link to="/dramaDetail" state={{ id: id }}><h3>{name}</h3></Link>
                    <br />
                    <span className={
                            `tag ${setVoteClass(vote_average)}`
                            }>
                       첫 방송일 : {first_air_date}
                    </span>
                    <br />
                    <span className={
                            `tag ${setVoteClass(vote_average)}`
                            }>
                       평점 :  {vote_average}
                    </span>
                </div>
            &nbsp;
            <br /><br />
        &nbsp;
        </p>
    </div>
);

export default Drama;