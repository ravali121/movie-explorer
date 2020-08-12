import React, { useEffect, useState} from "react";
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import Pagination from '../Pagination/Pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import './HomePage.css';


const HomeContainer = styled.div`
  background-color: #082541 ;
`;

const NavBar = styled.nav`
 align-items: center;
  min-height: 10vh;
  justify-content: center;
`;

const GenreButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'linear-gradient(to right, #F09819 0%, #EDDE5D 51%, #F09819 100%)' : 'linear-gradient(to right, #02AAB0 0%, #00CDAC 51%, #02AAB0 100%)'};
  //color: ${props => props.primary ? "white" : "black"};
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.5rem 0.75em;
  border: 1px solid darkcyan;
  border-radius: 10px;
  cursor: pointer;
   
  :hover {
   //background-position: right center;
    cursor: pointer;
    transform: scale(1.1);
   background-position: right center;
  }
`;

const SecondaryButton = styled(GenreButton)`
 background: grey;
 color: white;
  border: none;
`;

const StyledForm = styled.form`
  margin: ${(props) => (props.inlineForm ? "-.25em 1.15em 0 1.15em" : "0 1em")};
  height: 1.5em;
`;

const StyledInput = styled.input`
  width: ${(props) => (props.inlineForm ? "4.5em" : "20em")};
  height: ${(props) => (props.inlineForm ? "" : "2em")};
  transition: all 0.4s ease-in-out;
  background: #151c24;
  padding: 0.25em 0.75em;
  border: 2px solid black;
  border-radius: 1.5em;
  outline: none;
  color: white;
  font-family: inherit;
  margin-top: 0.5em;
  margin-left: 1em;

  :focus {
    border-color: #2769b4;
  }
  /*  */
  ::placeholder {
    font-size: 0.85em;
    color: rgb(225, 225, 225);
  }

  @media screen and (max-width: 900px) {
    width: ${(props) => (props.inlineForm ? "3em" : "40vw")};
    height: ${(props) => (props.inlineForm ? "" : "1.5em")};
  }

  @media screen and (max-width: 480px) {
    width: ${(props) => (props.inlineForm ? "3em" : "40vw")};
    height: ${(props) => (props.inlineForm ? "" : "1.5em")};
  }
`;

const StyledButton = styled.button`
  width: ${(props) => (props.inlineForm ? "1.8em" : "2.75em")};
  height: ${(props) => (props.inlineForm ? "1.8em" : "2.75em")};
  border-radius: 50%;
  border: 2px solid black;
  margin: 0 0 0 0.25em;
  background: #151c24;
  outline: none;

  transition: all 300ms ease-in-out;
  color: white;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    background: #2769b4;
    color: black;
    border-radius: 10%;
  }
`;

const SearchIcon = styled(FontAwesomeIcon).attrs({ icon: faSearch })`
  color: white;
  text-align: center;
  font-size: 0.85em;
`;

const GenresContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
`;


function HomePage() {
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [moviesList, setMoviesList] = useState([]);
    const [genreMoviesList, setGenreMoviesList] = useState(moviesList);
    const [searchValue, setSearchValue] = useState('');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(-1);


   useEffect(() => {
     popularMovies();
     getAllGenres();
   }, [page]);

  const numberOfPages = Math.min(Math.floor(totalResults/20), 10);

   function nextPage(pageNumber) {
     setPage(pageNumber);
   }

   const getAllGenres = () =>{
     fetch(`http://localhost:8080/genres`)
       .then(response =>
       response.json())
       .then(res => {
         setGenres(res.genres);
       })
   };

   const clearFilter = () => {
     setSelectedGenre(-1);
     setGenreMoviesList(moviesList);
   };

   const popularMovies = () =>{
     fetch(`http://localhost:8080/movies/popular?page=${page}`)
       .then(response =>
         response.json())
       .then(res => {
         setMoviesList(res.results);
         setGenreMoviesList(res.results);
         setTotalResults(res.total_results);
       })
       .catch(error => {});
   };

    const handleChange =(event) => {
     setSearchValue(event.target.value);
   };

   const handleSubmit =(event) => {
     event.preventDefault();
     const queryString = encodeURI(searchValue);
     if(queryString !== '') {
       fetch(`http://localhost:8080/search/movie?searchString=${queryString}&page=${page}`)
         .then(response =>
         response.json())
         .then(res => {
           setMoviesList(res.results);
           setGenreMoviesList(res.results);
           setTotalResults(res.total_results);
         })
         .catch(error => {});
     } else {
       popularMovies();
     }
   };

   const genreSelected = (genreId) => {
      setSelectedGenre(genreId);
      const x = moviesList.filter((l) => l.genre_ids.includes(genreId));
      setGenreMoviesList(x);
   };

    return (
      <HomeContainer>
        {/*Nav*/}
        <NavBar>
          <StyledForm
            onSubmit={(e) => handleSubmit(e)}
          >
            <StyledInput
              type="text"
              placeholder="Search"
              name="search"
              autoComplete="off"
              value={searchValue}
              onChange={(event) => handleChange(event)}
            />
            <StyledButton type="submit"
            >
              <SearchIcon />
            </StyledButton>
          </StyledForm>
        </NavBar>

        {/*Genres Filter*/}

        {
          genres.length !== 0 &&
          <GenresContainer>
            {
              genres.map(e =>{
                return (
                  <GenreButton onClick={() => genreSelected(e.id)} key={e.id} primary={selectedGenre===e.id}>{e.name}</GenreButton>
                )
              })
            }
            <SecondaryButton onClick={() => clearFilter()} secondary>Clear Filter</SecondaryButton>
          </GenresContainer>
        }

        {/*Content*/}

          <MoviesGrid movies={genreMoviesList}/>

       {/* Add Pagination */}
        {
          totalResults > 20? <Pagination pages={numberOfPages} nextPage={nextPage} currentPage={page}/> : null
        }
      </HomeContainer>
    )

}
export default HomePage;

