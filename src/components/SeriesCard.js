import { Badge } from '@material-ui/core';
import React from 'react'
import Card from 'react-bootstrap/Card';
import './MovieCard.css'

function SeriesCard({data, base_url}) {
  console.log(data);
  return (
    <div className='container'>
        <div className='card'>
        <Badge
              anchorOrigin={{
                vertical: "left",
                horizontal: "center",
              }}
              className="moviebadge"
              badgeContent={data.vote_average
              }
              color={data.vote_average
                > 7 ? "secondary" : "primary"}
                
            />
      <img variant="top" src={`${base_url}${data.poster_path}`} className=" image" />
      
        <h3 className='moviename'>{data.name
}</h3>
      
    </div>
    </div>
  )
}

export default SeriesCard