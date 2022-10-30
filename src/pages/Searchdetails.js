import React from 'react'
import './Moviedetails.css'
import { useLocation, useParams } from "react-router-dom";


const base_url = "https://image.tmdb.org/t/p/original/";


function Searchdetails(props) {

    const params = useParams();

    const location = useLocation();

    
    const details = location.state?.item;

    console.log(details);

    function truncate(content,n){
      return content?.length>n?content?.substr(0,n-1)+"...":content
   }
  return (

<div className='searchbody'>
      <div
        className="main"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(1, 2, 19, 2),rgba(255, 255, 255, 0)),url("https://image.tmdb.org/t/p/original/${details.backdrop_path|| details.poster_path
        }")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="titledetails">{details.name || details.title || details.original_name}</h1>
        <p className="overviewdetails">{truncate(details.overview,338)}</p>

        <div className="maindetails">
          <img
            className="posterindetails"
            src={`${base_url}${details.poster_path}`}
            alt="title"
          />
          <div className="values">
            <h5 className="valuehead">
              Released :{" "}
              <span className="valuedetails">{details.first_air_date || details.release_date
}</span>
            </h5>
            <h5 className="valuehead">
              Language :{" "}
              <span className="valuedetails">{details.original_language}</span>
            </h5>
            <h5 className="valuehead">
              Popularity :{" "}
              <span className="valuedetails">
                ({details.popularity.toFixed()})&nbsp;Peoples watched
              </span>
            </h5>
            <h5 className="valuehead">
              Original Name :{" "}
              <span className="valuedetails">{details.original_name || details.original_title}</span>
            </h5>
          </div>

        </div>
        <div><h5 className="rating">Rating :   &nbsp; &nbsp;{details.vote_average}  &nbsp;  <span className="vote">({details.vote_count})</span></h5></div>

        <div className="values1">
            <h5 className="valuehead1">
              Released :{" "}
              <span className="valuedetails1">{details.first_air_date || details.release_date
}</span>
            </h5>
            <h5 className="valuehead1">
              Language :{" "}
              <span className="valuedetails1">{details.original_language}</span>
            </h5>
            <h5 className="valuehead1">
              Popularity :{" "}
              <span className="valuedetails1">
                ({details.popularity.toFixed()})&nbsp;Peoples watched
              </span>
            </h5>
            <h5 className="valuehead1">
              Original Name :{" "}
              <span className="valuedetails1">{details.original_name || details.original_title}</span>
            </h5>
          </div>

      </div>
    </div>    
  )
}

export default Searchdetails