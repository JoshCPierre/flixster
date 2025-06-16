import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MovieGrid from "./Components/MovieGrid/MovieGrid";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";

// now playing: https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}
// popular: https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}
// top rated: https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}
// upcoming: https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}

const App = () => {
  // reset to top of scrren everytime refresh
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const [searchQuery, setSearchQuery] = useState(""); // submit button
  const [sortOption, setSortOption] = useState("normal"); // sort
  const [submittedQuery, setSubmittedQuery] = useState("");

  const [gridApiPage, setGridApiPage] = useState(1);
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // console.log(searchQuery);
  };

  // return to normal page
  function clearSearch() {
    setGridApiPage(1);
    setSearchQuery("");
    setSubmittedQuery("");
    setSortOption("normal");
  }

  const handleSortOption = (event) => {
    setSortOption(event.target.value);
    console.log("sort: ", sortOption);
  };

  function searchForMovies(event) {
    // get query
    event.preventDefault();
    setSubmittedQuery(searchQuery);
    // console.log(searchQuery);
  }

  // always return to top on window refresh

  return (
    <div className="App">
      <Header
        handleSearchChange={handleSearchChange}
        clearSearch={clearSearch}
        searchForMovies={searchForMovies}
        searchQuery={searchQuery}
        handleSortOption={handleSortOption}
        sortOption={sortOption}
      ></Header>
      <main>
        <Sidebar></Sidebar>
        <div className="app-movie-list">
          <MovieGrid
            id="now-playing"
            section_title="Now Playing"
            sortOption={sortOption}
            submittedQuery={submittedQuery}
            gridApiPage={gridApiPage}
            setGridApiPage={setGridApiPage}
          ></MovieGrid>
          <MovieList
            section_title="Popular"
            id="popular"
            section_link="popular"
          ></MovieList>
          <MovieList
            section_title="Top Rated"
            id="top-rated"
            section_link="top_rated"
          ></MovieList>
          <MovieList
            section_title="Upcoming"
            id="upcoming"
            section_link="upcoming"
          ></MovieList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
