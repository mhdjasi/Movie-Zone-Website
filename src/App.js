import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Bottom from "./components/Bottom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Moviedetails from "./pages/Moviedetails";
import Movies from "./pages/Movies";
import Rowdetails from "./pages/Rowdetails";
import Search from "./pages/Search";
import Searchdetails from "./pages/Searchdetails";
import Series from "./pages/Series";
import Seriesdetails from "./pages/Seriesdetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/series" element={<Series />} />

            <Route path="/search" element={<Search />} />

            <Route path="/rowdetails/:id" element={<Rowdetails />} />

            <Route path="/moviedetails/:id" element={<Moviedetails />} />

            <Route path="/seriesdetails/:id" element={<Seriesdetails />} />

            <Route path="/serachdetails/:id" element={<Searchdetails />} />
          </Routes>
        </div>
        <Bottom />
      </Router>
    </>
  );
}

export default App;
