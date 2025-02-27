import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constent";
import { useEffect } from "react";
import {  addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // Define the async function properly
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      dispatch(addUpcomingMovies(json.results)); // Dispatch action correctly
    } catch (error) {
      console.error("Fetching movies failed", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, [dispatch]); // Add dispatch to dependency array

};

export default useUpcomingMovies;
