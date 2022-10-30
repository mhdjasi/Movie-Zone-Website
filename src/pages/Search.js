import { Tab, Tabs } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomPagination from "../components/CustomPagination";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import "./Search.css";

const APIKEY = "47de2b9e8b2462b53975d18185ac40bf";

const base_url = "https://image.tmdb.org/t/p/original/";


function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
   const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=${APIKEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages)
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page])

  return (
    <div >
      <div className="container-fluid searchbar" style={{ display: "flex" }}>
        <input
          placeholder="search"
          style={{ flex: 1 }}
          className="searchbox form-control "
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={fetchSearch} className="btn bg-success" style={{ marginLeft: 10 }}>
          Search
        </button>
      </div>

      <Tabs
        value={type}
        className="tabs container"
        indicatorColor="primary"
        textColor="secondary"
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        style={{ paddingBottom: 5 }}
      >
        <Tab className="tab" style={{ width: "50%" }} label="Search Movies" />
        <Tab
          className="tab"
          style={{ width: "50%" }}
          label="Search TV Series"
        />
      </Tabs>

      <Row className="w-100 mt-5 ">
        {content && content.map((movies) => (
          <Col className="list">
            <SearchCard key={movies.id} movies={movies} base_url={base_url} media_type = {type ? "tv" : "movie"} />
          </Col>
        ))}
        {searchText && !content && (type ? <h2 style={{ color:"white", textAlign:"center" }} >No Series Found</h2> : <h2 style={{ color:"white", textAlign:"center" }}>No Movies Found</h2>)}
      </Row>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}

<Footer/>
    </div>
  );
}

export default Search;
