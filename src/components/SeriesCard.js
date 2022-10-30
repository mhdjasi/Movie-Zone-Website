import { Badge } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'

function SeriesCard({data, base_url}) {
  console.log(data);
  return (
    <div className='container'>
        <div className='movieposter'>
        <Link
          to={`/seriesdetails/${data.id}`}
          state={{ item: data }}
          style={{ textDecoration: "none" }}
        >  
      <img variant="top" src={`${base_url}${data.poster_path}`} className=" image" />
      </Link>
      </div>
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="moviebadge"
        badgeContent={data.vote_average}
        color={data.vote_average > 8 ? "secondary" : "primary"}
      />
      <div className="movie-caption">
        <h6 className="movietitle">
          {data.name || data.title || data.original_name}
        </h6>
      </div>
      
    
    </div>
  );
};

export default SeriesCard