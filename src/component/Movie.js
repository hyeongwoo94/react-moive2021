import {Link} from "react-router-dom";
import PropTypes from "prop-types";
const Movie = ({id, mainImg, title, genres, summary}) => {
  return (
    <li key={id} style={{width:"45%",padding:"0 10px"}}>
      <img src={mainImg} alt={title}
      />
      <div style={{display:"grid"}}>
        <h3 style={{fontSize:"1.5rem"}}><Link to ={`/movie/${id}`}>{title}</Link></h3>
        <ul style={{listStyle:"none",padding:"0", display:"flex", justifyContent:"space-around"}}>
          { genres.map((g) => (
            <li key={g} style={{fontWeight:"bold", color:"#ccc"}}>{g}</li>
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