import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import AppMainContent from "./Components/AppMainContent/AppMainContent";
import FavoriteWatchedModal from "./Components/FavoriteWatchedModal/FavoriteWatchedModal";

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
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);
  const [showWatchedModal, setShowWatchedModal] = useState(false);

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

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

  const handleSidebarFavorites = () => {
    setShowFavoriteModal((prevValue) => !prevValue);
    console.log(favoriteMovies);
    setShowWatchedModal(false); // disable the other one

    console.log("side bar heart");
  };

  const handleSidebarWatched = () => {
    setShowWatchedModal((prevValue) => !prevValue);
    console.log(watchedMovies);
    setShowFavoriteModal(false); // disable the other one

    console.log("side bar watched");
  };

  const handleSidebarHome = () => {
    setShowWatchedModal(false);
    setShowFavoriteModal(false);
    console.log("side bar home");
  };


  useEffect(() => {
      if (showFavoriteModal || showWatchedModal) {
        document.body.style.overflow = "hidden";
      } else {
        // when modal closed allow it to scroll
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [showFavoriteModal, showWatchedModal]);

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
        <Sidebar
          handleSidebarFavorites={handleSidebarFavorites}
          handleSidebarWatched={handleSidebarWatched}
          handleSidebarHome={handleSidebarHome}
        ></Sidebar>
        <AppMainContent
          sortOption={sortOption}
          submittedQuery={submittedQuery}
          gridApiPage={gridApiPage}
          setGridApiPage={setGridApiPage}
          section_title=""
          section_link=""
          setShowFavoriteModal={setShowFavoriteModal}
          setShowWatchedModal={setShowWatchedModal}
          showFavoriteModal={showFavoriteModal}
          showWatchedModal={showWatchedModal}
          setFavoriteMovies={setFavoriteMovies}
          setWatchedMovies={setWatchedMovies}
          displayLikedWatchedContainer={true}
        ></AppMainContent>
      </main>
      <Footer></Footer>
      <FavoriteWatchedModal
        setShowFavoriteModal={setShowFavoriteModal}
        setShowWatchedModal={setShowWatchedModal}
        showFavoriteModal={showFavoriteModal}
        showWatchedModal={showWatchedModal}
        favoriteMovies={favoriteMovies}
        watchedMovies={watchedMovies}
        setFavoriteMovies={setFavoriteMovies}
        setWatchedMovies={setWatchedMovies}
        displayLikedWatchedContainer={false}
      ></FavoriteWatchedModal>
    </div>
  );
};

export default App;
