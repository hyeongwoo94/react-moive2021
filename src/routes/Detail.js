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
      {loading ? <h2 style={{textAlign:"center", fontSize:"3rem"}}>"기다려봐 팍 씨"</h2> : 
      (
        <div>
          {movie.map((info) => (
            <div key={info.id}>{info.title}</div>
          ))}
        </div>
      )
      } 
      
    </>
  )
}

export default Detail;