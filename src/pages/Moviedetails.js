import React from 'react'
import './Moviedetails.css'
import { useLocation } from "react-router-dom";



const base_url = "https://image.tmdb.org/t/p/original/";


function Moviedetails(props) {

  // const params = useParams();

  const location = useLocation();


  const data = location.state?.item;

  console.log(data);

//   const [movies, setMovies] = useState([]);





//   async function fetchData() {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`
//     );

// console.log("list",data);
//     setMovies(data.results);



//   };

//   useEffect(() => {
 
//     fetchData();

//   }, []);

//   // console.log("movies data",movies);


//   const data = movies?.find((res) => res.id == params.id);


//   // console.log("movie single",data);

  function truncate(content,n){
    return content?.length>n?content?.substr(0,n-1)+"...":content
 }

 
  return (

    <>

    <div
      className="main"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(1, 2, 19, 2),rgba(255, 255, 255, 0)),url("${base_url}/${data?.backdrop_path}")`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="titledetails">{data?.name || data?.title || data?.original_name}</h1>
      <p className="overviewdetails">{truncate(data?.overview,338)}</p>

      <div className="maindetails">
        <img
          className="posterindetails"
          src={`${base_url}${data?.poster_path}`}
          alt="title"
        />
        <div className="values">
          <h5 className="valuehead">
            Released:{" "}
            <span className="valuedetails">{data?.first_air_date || data?.release_date}</span>
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
     
     
      <div className="values1">
          <h5 className="valuehead1">
            Released :{" "}
            <span className="valuedetails1">{data?.first_air_date || data?.release_date}</span>
          </h5>
          <h5 className="valuehead1">
            Language :{" "}
            <span className="valuedetails1">{data?.original_language}</span>
          </h5>

          <h5 className="valuehead1">
            Popularity :{" "}
            <span className="valuedetails1">
              ({data?.popularity.toFixed()})&nbsp;Peoples watched
            </span>
          </h5>
          <h5 className="valuehead1">
            Original Name :{" "}
            <span className="valuedetails1">{data?.original_name || data?.original_title}</span>
          </h5>
        </div>
      
    </div>
  </>


  )
}

export default Moviedetails