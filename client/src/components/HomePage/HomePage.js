import React, { useEffect, useState} from "react";
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import './HomePage.css';
import Nav from "../Nav";

function HomePage() {
    const [page, setPage] = useState(1);
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     fetch(`http://localhost:8080/movies/popular?page=${page}`)
       .then(response =>
         response.json())
       .then(res => {
         setMoviesList(res.results);
         setIsLoading(false);
       })
       .catch(error => {});
   }, [page]);


    return (
      <div>
        <Nav/>
        <MoviesGrid movies={moviesList}/>
      {/* Add Pagination */}
      </div>
    )

}
export default HomePage;

