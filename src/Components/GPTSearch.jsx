import {  BG_URL, LOGO } from "../utils/constent"
import GPTMovieSuggestions from "./GptMovieSuggetions"
import GPTSearchBar from "./GptSearchBar"

const GPTSearch = (gptSearch = true) => {

  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen w-full object-cover fixed" src={BG_URL}  />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>

    </>
  )
}

export default GPTSearch