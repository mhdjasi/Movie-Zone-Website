import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import url from '../baseUrl';
import CustomPagination from '../components/CustomPagination';
import MovieCard from '../components/MovieCard';
import './Movies.css'


const APIKEY="47de2b9e8b2462b53975d18185ac40bf";


const base_url = "https://image.tmdb.org/t/p/original/";

function Series() {

  const [movies,setMovies]=useState([]);

  const [page, setPage] = useState(1);

  const [numOfPages, setNumOfPages] = useState();

  async function fetchData(){
     const result = await url.get(`https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
     setMovies(result.data.results);

     setNumOfPages(result.data.total_pages);

  }

  useEffect(()=>{
      fetchData()
                  // eslint-disable-next-line


  },[page])

console.log(movies);


  return (
<>
<h2 className='pagetitle'>TV Series</h2>

      <Row className='w-100 mt-5 '>
        {
          movies.map((movie) => (
  
            <Col className="list">
            <MovieCard key={movie.name} movies={movie} base_url={base_url}/>
            </Col>
          
            )
          )
        }
  
      </Row>
    {numOfPages>1 && (
      <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
  )}

</> 

  )
}

export default Series