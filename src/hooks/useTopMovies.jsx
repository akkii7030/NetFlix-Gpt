import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constent";
import { useEffect } from "react";
import {  addTopMovies } from "../utils/moviesSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();

  // Define the async function properly
  const getTopMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      dispatch(addTopMovies(json.results)); // Dispatch action correctly
    } catch (error) {
      console.error("Fetching movies failed", error);
    }
  };

  useEffect(() => {
    getTopMovies();
  }, [dispatch]); // Add dispatch to dependency array

};

export default useTopMovies;
