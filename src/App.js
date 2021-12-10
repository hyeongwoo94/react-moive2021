import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/movie" element={<Detail />}>
          </Route>
        </Routes>
      </Router>
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