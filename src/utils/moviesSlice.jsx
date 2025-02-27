import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopMovies: (state, action) => {
            state.topMovies = action.payload;
        },
    
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo= action.payload;
        }
    }
});
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopMovies,  addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;