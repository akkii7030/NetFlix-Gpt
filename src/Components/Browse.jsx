import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopMovies from "../hooks/useTopMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  // Calling the custom hook

  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();


  return (
    <>
      <Header />
      {
        showGptSearch ? <GPTSearch /> : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }


    </>
  )
}

export default Browse