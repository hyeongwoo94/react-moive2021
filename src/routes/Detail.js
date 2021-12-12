import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const [movie, setMovie] =useState([]);
  const getMovie = useCallback(async() => {
    const json = await (
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    setMovie(json.data.movie)
    setLoading(false)
    console.log(json);
    }, [id]);
    useEffect(() => {
    getMovie()
    }, [getMovie]);
  return(
    <>
      <h1>영화 상세페이지</h1>
      {loading ? <h2>"기다려봐 팍 씨"</h2> : 
      <div>
        <h2>{movie.title}</h2>
        <ul>
          <li>
            <img src={movie.large_cover_image} alt="큰 포스터"/>
          </li>
          <li>
            {movie.description_intro}
          </li>
        </ul>
      </div>
      } 
      
    </>
  )
}

export default Detail;

//무조건 map을 사용하는건 아닌다.