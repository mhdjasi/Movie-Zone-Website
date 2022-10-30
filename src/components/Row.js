import { Badge } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import url from "../baseUrl";
import Footer from "./Footer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const result = await url.get(fetchUrl);
    setMovies(result.data.results);
  }

  useEffect(() => {
     fetchData();
    // eslint-disable-next-line
  }, []);

  console.log(movies);
  return (
    <div className="row">
      <h1 className="titlename">{title}</h1>
      <div className="posters">
        {movies.map((movie) => (
          <>
            

            
              <Link to={`/rowdetails/${movie.id}`} state={{ movies: movies }} style={{ textDecoration: "none" }}>
                <img
                  key={movie.name}
                  className="poster ms-3"
                  src={`${base_url}${movie.poster_path}`}
                  alt="movie.name"
                />
                {/* <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className="badge"
              badgeContent={movie.vote_average}
              color={movie.vote_average > 8 ? "secondary" : "primary"}
            />
                <div className="image-caption">
      <h6 className="titleofmovie">{movie.name || movie.title || movie.original_name}</h6>
    </div> */}
              </Link>
              
<div>

</div>        

    </>

        ))}
      </div>
      
    </div>
    
  );
}

export default Row;
