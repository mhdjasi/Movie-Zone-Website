import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomPagination from "../components/CustomPagination";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import "./Movies.css";

const APIKEY = "47de2b9e8b2462b53975d18185ac40bf";

const base_url = "https://image.tmdb.org/t/p/original/";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);

  const [numOfPages, setNumOfPages] = useState();


  async function fetchData() {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );

    setMovies(data.results);

    setNumOfPages(500);
  }


  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page]);
 

  console.log(movies);

  return (
    <div className="moviemain">
      <h2 className="pagetitle">Movies</h2>

      

      <Row className="w-100 mt-5 ">
        {movies.map((movie) => (
          <Col className="list">
            <MovieCard key={movie.name} movies={movie} base_url={base_url} />
            
            

          </Col>
        ))}
      </Row>
      {numOfPages > 1 && (
        <CustomPagination  setPage={setPage} numOfPages={numOfPages} />
      )}

<Footer/>
    </div>
  );
}

export default Movies;
