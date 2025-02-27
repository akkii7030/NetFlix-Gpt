import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constent";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store?.movies?.popularMovies);

  // Function to Fetch Popular Movies from API
  const getPopularMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch popular movies");

      const json = await response.json();
      console.log('Popular Movie List:', json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    if (!popularMovies || popularMovies.length === 0) {
      getPopularMovies();
    }
  }, [popularMovies, dispatch]);

  return popularMovies;
};

export default usePopularMovies;
