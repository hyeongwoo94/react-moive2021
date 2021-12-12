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
    <>
      <h1 className="text-center">추천 영화</h1>
      {loading ? <h2>"기다려봐 팍 씨"</h2> : 
      <div>
        <ul>
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
    </>
  )
}

export default Home;