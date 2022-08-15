import React  from "react";

//congfig

import { POSTER_SIZE, BACKDROP_SIZE,IMAGE_BASE_URL } from "../config";

//components

import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";


//Hook

import {useHomeFetch} from '../hooks/useHomeFetch';

//Image

import NoImage from '../images/no_image.jpg'


const Home=()=>{

    const {state,loading,error,searchTerm,setSearchTerm}=useHomeFetch();
    
    console.log(state);


    return (
        <>
            {!searchTerm&&state.results[0]?
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
                :null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm?'Search Results':'Popular Movies'}>
                {state.results.map(movies=>(
                    <Thumb
                    key={movies.id}
                    clickable
                    image={
                        movies.poster_path
                        ?IMAGE_BASE_URL+ POSTER_SIZE+movies.poster_path
                        :NoImage
                    }
                    movieId={movies.id}
                    />
                ))}
            </Grid>
            <Spinner/>
        </>
    );
};
export default Home;