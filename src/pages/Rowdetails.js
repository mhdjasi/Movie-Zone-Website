import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Rowdetails.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rowdetails(props) {


  const params = useParams();

  const location = useLocation();

  // console.log(props, "props");

  // console.log(location, "uselocation");

  const data = location.state?.movies;

  console.log(data);

  const details = data.find((i) => i.id == params.id);


  console.log("data details", details);



  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(1, 2, 19, 2),rgba(255, 255, 255, 0)),url("https://image.tmdb.org/t/p/original/${details.backdrop_path}")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="titledetails">{details.name || details.title || details.original_name}</h1>
        <p className="overviewdetails">{details.overview}</p>

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

      </div>
    </>
  );
}

export default Rowdetails;
