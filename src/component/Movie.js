import {Link} from "react-router-dom";
import PropTypes from "prop-types";
const Movie = ({id, mainImg, title, genres, summary}) => {
  return (
    <li className="bg-white rounded-md shadow-2xl hover:bg-green-100" key={id} >
      <Link to ={`/movie/${id}`}>
      <img className="mx-auto rounded-lg mt-4" src={mainImg} alt={title}
      />
      <div >
        <h3 className="text-2xl mt-4 hover:bg-sky-700">{title.length > 20 ? `${title.slice(0,20)}...`: title}</h3>
        <ul className="flex justify-around">
          { genres.map((g) => (
            <li className="mt-2 text-blue-300" key={g}>{g}</li>
          ))}
        </ul>
        <p className="mt-4 pb-4 px-2">{summary.length > 50 ? `${summary.slice(0,50)}...`: summary}</p>
      </div>
      </Link>
    </li>       
  )
}

Movie.propTypes = {
  id:PropTypes.number.isRequired, 
  mainImg:PropTypes.string.isRequired, 
  title:PropTypes.string.isRequired, 
  genres:PropTypes.arrayOf(PropTypes.string).isRequired, 
  summary:PropTypes.string.isRequired,
};

export default Movie;