import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="max-w-screen-lg  mx-auto">     
      {loading ? <h2  className="text-center text-4xl my-8 font-bold">기다려봐 팍 씨"</h2> : 
      <div>
        <h1 className="text-center text-2xl my-4 font-bold">영화 상세페이지</h1>
        <p className="text-right my-2 text-gray-400 tracking-tight text-sm hover:text-green-400"><Link to ={`/react-moive2021`}>뒤로가기</Link></p>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <img className="my-4" src={movie.large_cover_image} alt="큰 포스터"/>
          </li>
          <li className="my-auto">
          <span className="text-sm">장르 :</span>
          { movie.genres.map((g) => (
            <span className="mt-2 text-gray-300 ml-2 text-sm" key={g}>{g}</span>
          ))}
          <h2 className="text-2xl mb-8 mt-4">{movie.title}</h2>
          <span className="">{movie.description_intro}</span>
          </li>
        </ul>
      </div>
      } 
      
    </div>
  )
}

export default Detail;

//무조건 map을 사용하는건 아닌다.