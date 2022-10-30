import { Badge } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'

function SearchCard({ movies, base_url }) {
    console.log("single search",movies);

  return (
    <div className="container">
    <div className="movieposter">
      <Link
        to={`/serachdetails/${movies.id}`}
        state={{ item: movies }}
        style={{ textDecoration: "none" }}
      >
        <img
          variant="top"
          src={`${base_url}${movies.poster_path}`}
          className="image"
        />
      </Link>
    </div>

    <Badge
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      className="moviebadge"
      badgeContent={movies.vote_average}
      color={movies.vote_average > 8 ? "secondary" : "primary"}
    />
    <div className="movie-caption">
      <h6 className="movietitle">
        {movies.name || movies.title || movies.original_name}
      </h6>
    </div>
  </div>

  );
};

export default SearchCard