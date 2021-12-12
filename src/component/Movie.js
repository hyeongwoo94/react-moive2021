import {Link} from "react-router-dom";
import PropTypes from "prop-types";
const Movie = ({id, mainImg, title, genres, summary}) => {
  return (
    <li key={id} >
      <img src={mainImg} alt={title}
      />
      <div >
        <h3 ><Link to ={`/movie/${id}`}>{title}</Link></h3>
        <ul>
          { genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}...`: summary}</p>
      </div>
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