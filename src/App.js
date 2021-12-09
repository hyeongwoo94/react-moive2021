import { useEffect, useState } from "react";

const App = () => {
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
      <h1 style={{textAlign:"center", fontSize:"3rem", marginBottom:"2rem"}}>추천 영화</h1>
      {loading ? <h2 style={{textAlign:"center", fontSize:"3rem"}}>"기다려봐 팍 씨"</h2> : 
      <div>
        <ul style={{listStyle:"none",padding:"0", display:"flex", flexWrap:"wrap", textAlign:"center",justifyContent:"space-between"}}>
        {movies.map((movie) => (
          <li key={movie.id} style={{width:"45%",padding:"0 10px"}}>
            <img src={movie.medium_cover_image} 
            />
            <div style={{display:"grid"}}>
              <h3 style={{fontSize:"1.5rem"}}>{movie.title_long}</h3>
              <ul style={{listStyle:"none",padding:"0", display:"flex", justifyContent:"space-around"}}>
                {movie.genres.map((genres,index) => (
                  <li key={index} style={{fontWeight:"bold", color:"#ccc"}}>{genres}</li>
                ))}
              </ul>
              <p>{movie.summary}</p>
            </div>
            
          </li>       
        ))}
        </ul>
      </div>
      }
    </>
  )
}

export default App;

// const getMovies = async () => {
//   const json = await (
//     await fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//     )
//   ).json();
//   setMovies(json.data.movies);
//   setLoading(false);
// };
//setLoading(false);를 하는 이유는 로딩이 끝낫으니 데이터를 보여주기위해 true를 false로 바꿔주기 위함이다.
// {movie.genres.map((genres,index) => (
//   <li key={index} style={{fontWeight:"bold", color:"#ccc"}}>{genres}</li>
// ))}
// map를 사용후 코드와 함께 추가하기위해서는 꼭 key값을 넣어줘야 한다. 그리고 () => ()이다. 뒤에가 중가로가 아닌 소가로이다.