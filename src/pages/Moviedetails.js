import React, { useEffect, useState } from 'react'
import './Moviedetails.css'
import { useParams } from "react-router-dom";
import axios from 'axios';


const APIKEY = "47de2b9e8b2462b53975d18185ac40bf";

const base_url = "https://image.tmdb.org/t/p/original/";


function Moviedetails(props) {

  const params = useParams();

  const [movies, setMovies] = useState([]);


  // const location = useLocation();


  // const content = location.state?.item;

  // console.log("content",content);

  // async function fetchData() {
  //   const result = await axios.get(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`
  //   );
  //   setMovies(result.data.results);

  // }

  useEffect(() => {
    // fetchData();
    // // eslint-disable-next-line

    async function fetchData() {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`
      );
      setMovies(result.data.results);
  
    };
     fetchData();

  }, []);

  console.log(movies);

  const data = movies?.find((res) => res.id == params.id);


  console.log(data);



  return (

    <>

          {/* <p className="overviewdetails">{data?.overview}</p> */}

    <div
      className="main"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(1, 2, 19, 2),rgba(255, 255, 255, 0)),url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="titledetails">{data?.name || data?.title || data?.original_name}</h1>
      <p className="overviewdetails">{data?.overview}</p>

      <div className="maindetails">
        <img
          className="posterindetails"
          src={`${base_url}${data?.poster_path}`}
          alt="title"
        />
        <div className="values">
          <h5 className="valuehead">
            Released :{" "}
            <span className="valuedetails">{data?.first_air_date || data?.release_date
}</span>
          </h5>
          <h5 className="valuehead">
            Language :{" "}
            <span className="valuedetails">{data?.original_language}</span>
          </h5>
          <h5 className="valuehead">
            Popularity :{" "}
            <span className="valuedetails">
              ({data?.popularity.toFixed()})&nbsp;Peoples watched
            </span>
          </h5>
          <h5 className="valuehead">
            Original Name :{" "}
            <span className="valuedetails">{data?.original_name || data?.original_title}</span>
          </h5>
        </div>

      </div>
      <div><h5 className="rating">Rating :   &nbsp; &nbsp;{data?.vote_average}  &nbsp;  <span className="vote">({data?.vote_count})</span></h5></div>

    </div>
  </>


  )
}

export default Moviedetails