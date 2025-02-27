import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constent";
import { addGptMovieResult } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const langKey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);

  // Fetch movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const query = encodeURIComponent(movie.trim()); // Ensure clean query
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await response.json();
    console.log(`TMDB response for ${movie}:`, json.results); // Debugging

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    try {
      const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: "${searchText?.current?.value}". 
      Only give me names of 5 movies, comma-separated like this example:
      Example: Rebel Moon: Part One - A Child of Fire, Wonka, Leave the World Behind, The Iron Claw, Maestro`;

      const gptResults = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuery }],
      });

      console.log("GPT Response:", gptResults); // Debugging

      if (!gptResults.choices || gptResults.choices.length === 0) {
        navigate("/browse/movieError");
        return;
      }

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",").map(movie => movie.trim());

      console.log("GPT Movies List:", gptMovies); // Debugging

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      console.log("TMDB Results:", tmdbResults); // Debugging

      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));

    } catch (error) {
      console.error("Error occurred while fetching data from OpenAI:", error.message);
      navigate("/browse/movieError");
    }
  };

  return (
    <div className="pt-[39%] md:pt-[10%] flex justify-center">
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="bg-white w-full md:w-1/2 max-w-screen-lg grid grid-cols-1 lg:grid-cols-12 gap-4 border-2 border-green-500"
      >
        <input
          type="text"
          className="p-3 md:p-4 col-span-12 lg:col-span-9"
          placeholder={lang[langKey]?.gptSearchPlaceholder || "What would you like to see today!!"}
          ref={searchText}
        />
        <button onClick={handleGPTSearchClick} className="py-2 px-3 md:px-4 col-span-12 lg:col-span-3 bg-red-700 text-white rounded-lg mt-2 lg:mt-0">
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
