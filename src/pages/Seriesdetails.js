import React from "react";
import "./Moviedetails.css";
import { useLocation } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function Seriesdetails(props) {
  // const params = useParams();

  const location = useLocation();

  const data2 = location.state?.item;

  console.log(data2);

  function truncate(content, n) {
    return content?.length > n ? content?.substr(0, n - 1) + "..." : content;
  }

  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(1, 2, 19, 2),rgba(255, 255, 255, 0)),url("https://image.tmdb.org/t/p/original/${data2?.backdrop_path}")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="titledetails">
          {data2?.name || data2?.title || data2?.original_name}
        </h1>
        <p className="overviewdetails">{truncate(data2?.overview, 338)}</p>

        <div className="maindetails">
          <img
            className="posterindetails"
            src={`${base_url}${data2?.poster_path}`}
            alt="title"
          />
          <div className="values">
            <h5 className="valuehead">
              Released :{" "}
              <span className="valuedetails">
                {data2?.first_air_date || data2?.release_date}
              </span>
            </h5>
            <h5 className="valuehead">
              Language :{" "}
              <span className="valuedetails">{data2?.original_language}</span>
            </h5>
            <h5 className="valuehead">
              Popularity :{" "}
              <span className="valuedetails">
                ({data2?.popularity.toFixed()})&nbsp;Peoples watched
              </span>
            </h5>
            <h5 className="valuehead">
              Original Name :{" "}
              <span className="valuedetails">
                {data2?.original_name || data2?.original_title}
              </span>
            </h5>
          </div>
        </div>
        <div>
          <h5 className="rating">
            Rating : &nbsp; &nbsp;{data2?.vote_average} &nbsp;{" "}
            <span className="vote">({data2?.vote_count})</span>
          </h5>
        </div>

        <div className="values1">
          <h5 className="valuehead1">
            Released :{" "}
            <span className="valuedetails1">
              {data2?.first_air_date || data2?.release_date}
            </span>
          </h5>
          <h5 className="valuehead1">
            Language :{" "}
            <span className="valuedetails1">{data2?.original_language}</span>
          </h5>
          <h5 className="valuehead1">
            Popularity :{" "}
            <span className="valuedetails1">
              ({data2?.popularity.toFixed()})&nbsp;Peoples watched
            </span>
          </h5>
          <h5 className="valuehead1">
            Original Name :{" "}
            <span className="valuedetails1">
              {data2?.original_name || data2?.original_title}
            </span>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Seriesdetails;
