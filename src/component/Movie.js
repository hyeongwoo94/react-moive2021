import PropTypes from "prop-types";
const Movie = ({id, mainImg, title, genres, summary}) => {
  return (
    <li key={id} style={{width:"45%",padding:"0 10px"}}>
      <img src={mainImg} alt={title}
      />
      <div style={{display:"grid"}}>
        <h3 style={{fontSize:"1.5rem"}}>{title}</h3>
        <ul style={{listStyle:"none",padding:"0", display:"flex", justifyContent:"space-around"}}>
          {genres && genres.map((genres,index) => (
            <li key={index} style={{fontWeight:"bold", color:"#ccc"}}>{genres}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </li>       
  )
}

Movie.propTypes = {
  id:PropTypes.string.isRequired, 
  mainImg:PropTypes.string.isRequired, 
  title:PropTypes.string.isRequired, 
  genres:PropTypes.string.isRequired, 
  summary:PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Movie;