import { useEffect, useState } from "react";
import Movie from "../component/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  },[]);

  return(
    <div className="max-w-screen-lg  mx-auto">
      {loading ? <h2 className="text-center text-4xl my-8 font-bold">"기다려봐 팍 씨"</h2> : 
      <div className="">
        <h1 className="text-center text-4xl py-8 font-bold">추천 영화</h1>
        <p className="text-right my-2 text-gray-400 tracking-tight text-sm">* 클릭시 상세 보기</p>
        <ul className="grid grid-cols-3 text-center gap-12">
        {movies.map((movie) => (
          <Movie
          key={movie.id} 
          title={movie.title_long}
          mainImg={movie.medium_cover_image}
          id= {movie.id}
          genres= {movie.genres}
          summary={movie.summary}
          /> 
        ))}
        </ul>
      </div>
      }
    </div>
  )
}

export default Home;