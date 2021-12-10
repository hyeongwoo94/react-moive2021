import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const{id} = useParams();
  const [list, setList] =useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setList(json.data.list);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return(
    <>
    <h1>디테일 페이지</h1>
    
   
    </>
  )
}

export default Detail;