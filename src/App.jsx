import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import MovieGrid from "./Components/MovieGrid/MovieGrid";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


// now playing: https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}
// popular: https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}
// top rated: https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}
// upcoming: https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}

const App = () => {
  // const [movieCategory,setMovieCategory] = useState("");
  // const [listApiPage, setListApiPage] = useState(1);

  return (
    <div className="App">
      <Header></Header>
      <div className="app-movie-list">
        <MovieGrid section_title="Now Playing" movie_category="now_playing"></MovieGrid>
        {/* <MovieList section_title="Popular" api_link={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}></MovieList>
        <MovieList section_title="Top Rated" api_link={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}></MovieList>
        <MovieList section_title="Upcoming" api_link={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`}></MovieList> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
