import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constent";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);

  // Function to Fetch Movies from API
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch movies");

      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, dispatch]);

  return nowPlayingMovies;
};

export default useNowPlayingMovies;
